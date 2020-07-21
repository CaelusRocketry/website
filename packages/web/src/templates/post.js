import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const PostPage = ({ data: { post } }) => {
  return (
    <Layout>
      <SEO title={`${post.title} | Blog`} />
      <section className="container mb-12">
        <div className="flex flex-wrap border-4 border-accent">
          {post.image ? (
            <div className="w-full max-h-full md:w-1/2">
              <Image
                className="h-full border-b-4 md:border-r-4 md:border-b-0 border-accent"
                fluid={post.image.asset.fluid}
                alt={post.title}
              />
            </div>
          ) : null}
          <div
            className={`w-full p-6 bg-primary-light text-primary-dark ${
              post.image ? "md:w-1/2" : ""
            }`}
          >
            <h1 className="text-4xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl mb-2 text-secondary-dark">
              Written on
              <span className="ml-1">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="container body">
        <BlockContent
          blocks={post.body}
          serializers={{}}
          projectId={process.env.GATSBY_SANITY_ID}
          dataset={process.env.GATSBY_SANITY_DATASET}
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    post: sanityPost(_id: { eq: $id }) {
      title
      date
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      body: _rawBody
    }
  }
`;

export default PostPage;
