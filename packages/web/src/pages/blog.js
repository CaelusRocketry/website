import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImagePost from "../components/imagePost";
import SubPost from "../components/subpost"
import Img from "gatsby-image"
import BlockContent from '@sanity/block-content-to-react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BlogPage = ({ data }) => {

  
/*"bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light"*/
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <Layout>
      <SEO title="Blog" />

      <div style={{ textAlign: "center" }}>
        <h2 className="font-serif text-4xl text-white-800 text-center mb-10">
          -- Blog --
        </h2>
      </div>

      <ImagePost header={data.blogPosts.nodes[0].title} desc={data.blogPosts.nodes[0].overview} slug={data.blogPosts.nodes[0].slug.current}>
        <Img fluid={data.blogPosts.nodes[0].titleImage.asset.fluid} />
      </ImagePost>

      <Carousel responsive={responsive}>
        {[1, 1, 1, 1].map((index) => (
          <div class='flex-auto'>
            <SubPost header={data.blogPosts.nodes[index].title} slug={data.blogPosts.nodes[index].slug.current}>
              <Img fixed={data.blogPosts.nodes[index].titleImage.asset.fixed}/>
            </SubPost>
          </div>
        ))}
      </Carousel>
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
        slug {
          current
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

/*
OLD CODE
      <section class='flex'>
        {[1, 1, 1, 1].map((index) => (
          <div class='flex-auto'>
            <SubPost header={data.blogPosts.nodes[index].title} slug={data.blogPosts.nodes[index].slug.current}>
              <Img fixed={data.blogPosts.nodes[index].titleImage.asset.fixed}/>
            </SubPost>
          </div>
        ))}
      </section>
*/
