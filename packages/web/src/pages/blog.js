import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subheading from "../components/subheading";
import ImagePost from "../components/imagePost";
import Footer from "../components/footer";
import Img from "gatsby-image";
import "react-multi-carousel/lib/styles.css";
import PostCarousel from "../components/postcarousel";

const BlogPage = ({ data }) => {
  /*"bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light"*/

  const posts = data.blogPosts.nodes;

  return (
    <Layout>
      <SEO title="Blog" />

      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Blog"></Subheading>
      </section>

      <ImagePost
        header={posts[0].title}
        desc={posts[0].description}
        slug={posts[0].slug.current}
        date={posts[0].date}
      >
        <Img fluid={posts[0].image.asset.fluid} />
      </ImagePost>

      <PostCarousel posts={posts} start={1} />

      <Footer />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    blogPosts: allSanityPost {
      nodes {
        title
        date
        description
        body {
          _key
          _type
          style
          list
        }
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 10, maxHeight: 7) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 300, height: 200) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
