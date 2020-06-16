import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImagePost from "../components/imagePost";
import Img from "gatsby-image"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <div style={{ textAlign: "center" }}>
      <h2 className="font-mono text-lg text-gray-800 text-center" /*"bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light"*/>
        Blog
      </h2>
    </div>

    <ImagePost header="Programming is awesome" desc={data.posts.nodes[0].description}>
      <Img fluid={data.posts.nodes[0].image.asset.fluid} />
    </ImagePost>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query {
    posts: allSanityPost {
      nodes {
        title
        description
        image {
          asset {
            fluid(maxWidth: 10) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
