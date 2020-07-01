import React from "react";
import BackgroundImage from "gatsby-background-image";
import {
  FaRegFileCode,
  FaAtom,
  FaPencilRuler
} from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subheading from "../components/subheading";

const BlockContent = require('@sanity/block-content-to-react')

const icons = {"Programming": <FaRegFileCode size="100px" style={{ margin: "0 15px" }} />,
              "Propulsion": <FaAtom size="100px" style={{ margin: "0 15px" }} />,
              "Outreach": <FaPencilRuler size="100px" style={{  textAlign: "center", margin: "0 15px" }} /> }


function AboutPage({ data }) {
  return (
    <Layout>
      <SEO title="About Us" />

      <BackgroundImage
        fluid={data.about.nodes[0].teamImage.asset.fluid}
        className="md:mt-0 -mt-16"
        style={{
          height: "70vh",
          width: "100%",
          backgroundSize: "contain",
        }}
      />
      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Our Team">
          {data.about.nodes[0].teamImage.caption}
        </Subheading>
        <Subheading heading="Purpose">
          {}
          <BlockContent blocks={data.about.nodes[0].purpose} />
        </Subheading>
        <Subheading heading="Subsystems"></Subheading>
      </section>

     
      <section class="flex mb-4 container mx-auto">
        
        {data.about.nodes[0].subsystem.map((subsys) => (
          <div
            class="flex-auto w-full md:w-1/3 justify-center"
            style={{ padding: 20, margin: 30, borderRadius: "25px", color: "#0D1321"}}
            className="bg-secondary-light primary-dark inline-block my-8 p-3"
          >
            
            <div className="w-full flex justify-center">
            {icons[subsys.title]}
            </div> <br></br>

            <h1 class="font-serif text-3xl text-center mb-2">
              {subsys.title}
            </h1>

            <p className="container mx-auto primary-dark" style={{ textAlign: "center" }}>
              {subsys.value}
            </p>
          </div>

        ))}
      </section>

    </Layout>
  );
}

export const query = graphql`
  query {
    about: allSanityAbout {
      nodes {
        purpose: _rawPurpose
        teamImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
          caption
        }
        subsystem {
          title
          value
        }
      }
    }
  }
`;

export default AboutPage;
// teamImage {
//   asset {
//     fluid {
//       ...GatsbySanityImageFluid
//     }
//   }
//   caption
// }