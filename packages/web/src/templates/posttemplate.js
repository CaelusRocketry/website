import React from "react";
import Layout from "../components/layout";
import Subheading from "../components/subheading";
import SEO from "../components/seo";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";
import '../css/github-markdown.css';

const PostTemplate = ({ data: { post } }) => (
  <Layout
    seo={<SEO title={`${post.title} | Blog`} keywords={[`blog`, `post`]} />}
  >
    <header class="font-serif text-center text-4xl">-- {post.title} --</header>
    <div class="text-center">
      <Img fixed={post.image.asset.fixed} />
    </div>
    <section className="flex flex-col bg-primary-dark justify-center markdown-body">
      <Subheading heading="Overview">{post.description}</Subheading>
      <Subheading heading="Body">
        <BlockContent
          blocks={post._rawBody || []}
          serializers={{}}
          projectId={process.env.GATSBY_SANITY_ID}
          dataset={process.env.GATSBY_SANITY_DATASET}
        />
      </Subheading>
    </section>
  </Layout>
);

export const query = graphql`
  query PostQuery($id: String) {
    post: sanityPost(_id: { eq: $id }) {
      title
      description
      date(formatString: "")
      _rawBody
      slug {
        current
      }
      image {
        asset {
          fixed(width: 500) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`;

export default PostTemplate;
