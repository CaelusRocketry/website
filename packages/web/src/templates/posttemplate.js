import React from 'react'
import Layout from "../components/layout"
import Subheading from "../components/subheading";
import SEO from "../components/seo"
import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'
import "github-markdown-css"

const PostTemplate = ({ data: { post } }) => (
    <Layout
        seo={<SEO title={`${post.title} | Blog`} keywords={[`blog`, `post`]} />}
    >
        <header class='font-serif text-center text-4xl'>-- {post.title} --</header>
        <div class='text-center'>
            <Img fixed={post.titleImage.asset.fixed} />
        </div>
        <section className="flex flex-col bg-primary-dark justify-center">
            <Subheading heading="Overview">{post.overview}</Subheading>
            <Subheading heading="Body">
              <div class="markdown-body">
                <BlockContent
                  blocks={post._rawBody || []}
                  projectId={process.env.GATSBY_SANITY_ID}
                  dataset={process.env.GATSBY_SANITY_DATASET}
                />
              </div>
            </Subheading>
        </section>
    </Layout>
)

export const query = graphql`
  query PostQuery($id: String) {
    post: sanityBlogPost(_id: { eq: $id }) {
      title
      overview
      datetime(formatString: "")
      _rawBody
      slug {
        current
      }
      titleImage {
        asset {
          fixed(width: 500) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`;

export default PostTemplate