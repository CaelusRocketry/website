import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="container mb-12">
        <Image fluid={data.settings.teamImage.asset.fluid} />
        <caption className="opacity-75 qtext-base block w-full mt-6">
          {data.settings.teamImage.caption}
        </caption>
      </section>
      <section className="container">
        <h2 className="heading mb-4 text-4xl" data-text="Mission">
          Mission
        </h2>
        <div className="body">
          <BlockContent blocks={data.settings.mission} serializers={[]} />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    settings: sanitySettings {
      teamImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
        caption
      }
      mission: _rawMission
    }
  }
`;

export default AboutPage;
