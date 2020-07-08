import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import Event from "../components/event";
import '../css/github-markdown.css';

function OutreachPage({ data }) {
  return (
    <Layout>
      <SEO title="Outreach" />
      <Event data={data.events.nodes}></Event>
      <Footer></Footer>
    </Layout>
  );
}

export const query = graphql`
  query {
    events: allSanityEvent {
      nodes {
        title
        description:_rawDescription
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

export default OutreachPage;
