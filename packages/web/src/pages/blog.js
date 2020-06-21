import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImagePost from "../components/imagePost";
import SubPost from "../components/subpost"
import Img from "gatsby-image"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <div style={{ textAlign: "center" }}>
      <h2 className="font-serif text-4xl text-white-800 text-center mb-10" /*"bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light"*/>
        -- Blog --
      </h2>
    </div>

    <ImagePost header={data.posts.nodes[2].title} desc={data.posts.nodes[1].description}>
      <Img fluid={data.posts.nodes[2].image.asset.fluid} />
    </ImagePost>

    <section class='flex'>
      {[1, 2, 3, 4].map((index) => (
        <div class='flex-auto'>
          <SubPost header="Example">
            <Img fixed={data.posts.nodes[index].image.asset.fixed}/>
          </SubPost>
        </div>
      ))}
    </section>
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
            fixed(width: 300, height: 200) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
