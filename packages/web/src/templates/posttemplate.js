import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostTemplate = ({ data: { post } }) => (
    <Layout
        seo={<SEO title={`${post.title} | Blog`} keywords={[`blog`, `post`]} />}
    >
        <div class='text-center'>
            {post.title}<br/>
            {post.overview}
        </div>
    </Layout>
)

export const query = graphql`
  query PostQuery($id: String) {
    post: sanityBlogPost(_id: { eq: $id }) {
      title
      overview
      datetime(formatString: "")
      slug {
        current
      }
      titleImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default PostTemplate