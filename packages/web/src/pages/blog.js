import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImagePost from "../components/imagePost";
import SubPost from "../components/subpost"
import Img from "gatsby-image"
import BlockContent from '@sanity/block-content-to-react'

const BlogPage = ({ data }) => {

  
/*"bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light"*/

  return (
    <Layout>
      <SEO title="Blog" />

      <div style={{ textAlign: "center" }}>
        <h2 className="font-serif text-4xl text-white-800 text-center mb-10">
          -- Blog --
        </h2>
      </div>

      <ImagePost header={data.blogPosts.nodes[0].title} desc={data.blogPosts.nodes[0].overview}>
        <Img fluid={data.blogPosts.nodes[0].titleImage.asset.fluid} />
      </ImagePost>

      <section class='flex'>
        {[1].map((index) => (
          <div class='flex-auto'>
            <SubPost header="Example">
              <Img fixed={data.blogPosts.nodes[index].titleImage.asset.fixed}/>
            </SubPost>
          </div>
        ))}
      </section>
    </Layout>
  )

}

export default BlogPage;

export const query = graphql`
  query {
    blogPosts: allSanityBlogPost {
      nodes {
        title
        datetime
        overview
        body {
          _key
          _type
          style
          list
        }
        titleImage {
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
