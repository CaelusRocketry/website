import React from "react";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
const BlockContent = require("@sanity/block-content-to-react");

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section
        className="flex flex-col bg-primary-dark justify-center"
        style={{ height: "90vh" }}
      >
        <div className="p-8 text-center">
          <h2 className="md:text-5xl text-4xl font-bold border-b-4 border-dashed border-accent inline-block mb-4">
            Project Caelus
          </h2>
          <p className="md:text-2xl text-xl">
            The first high-school group to take a liquid-fuel rocket to space.
          </p>
        </div>
        <BackgroundImage
          fluid={data.rocket.childImageSharp.fluid}
          className="md:mt-0 -mt-16"
          style={{
            height: "50vh",
            width: "100%",
            backgroundSize: "contain"
          }}
        />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    rocket: file(relativePath: { eq: "index/hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    settings: allSanitySettings {
      nodes {
        mission: _rawMission
        gallery {
          caption
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
    timeline: allSanityTimeline(sort: { order: ASC, fields: key }) {
      nodes {
        key
        date
        finished
        title
        description
        image {
          asset {
            fluid {
              src
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
