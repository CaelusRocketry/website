import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";
import { FaLongArrowAltRight } from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPageItem = ({ post }) => (
  <div className="flex-1">
    <h3 className="heading text-3xl mb-1">{post.title}</h3>
    <Link to={`/blog/${post.slug.current}`}>
      <a className="block text-accent text-xl mb-2">
        Read More
        <FaLongArrowAltRight className="text-2xl inline ml-2" />
      </a>
    </Link>
    <p className="text-xl mb-2 text-secondary-light">
      Written on
      <span className="ml-1">{new Date(post.date).toLocaleDateString()}</span>
    </p>
    <div className="body">{post.description}</div>
  </div>
);

const BlogPage = ({ data }) => {
  const mainPost = data.posts.nodes[0];

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="container mb-8">
        {mainPost.image ? (
          <div className="mt-4 mb-4 w-full mr-6" style={{ height: "400px" }}>
            <Image className="h-full" fluid={mainPost.image.asset.fluid} />
          </div>
        ) : null}
        <BlogPageItem post={mainPost} />
      </section>
      <section className="container">
        {data.posts.nodes.slice(1).map(post => (
          <div className="flex flex-wrap mb-8" key={post.slug.current}>
            {post.image ? (
              <div className="mt-4 mb-4 w-full lg:w-1/3 lg:flex mr-6">
                <Image className="w-full" fluid={post.image.asset.fluid} />
              </div>
            ) : null}
            <BlogPageItem post={post} />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    posts: allSanityPost(sort: { fields: date, order: DESC }) {
      nodes {
        description
        slug {
          current
        }
        title
        date
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
