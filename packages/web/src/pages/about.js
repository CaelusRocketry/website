import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImg from "gatsby-background-image";
import { FaRegFileCode, FaAtom, FaPencilRuler } from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subheading from "../components/subheading";
import Footer from "../components/footer";

const BlockContent = require("@sanity/block-content-to-react");

const icons = {
  Programming: <FaRegFileCode size="100px" style={{ margin: "0 15px" }} />,
  Propulsion: <FaAtom size="100px" style={{ margin: "0 15px" }} />,
  Outreach: (
    <FaPencilRuler
      size="100px"
      style={{ textAlign: "center", margin: "0 15px" }}
    />
  )
};

function AboutPage({ data }) {
  return (
    <Layout>
      <SEO title="About Us" />

      <BackgroundImg
        fluid={data.about.nodes[0].teamImage.asset.fluid}
        className="md:mt-0 -mt-16"
        style={{
          height: "70vh",
          width: "100%",
          backgroundSize: "contain"
        }}
      />
      <section className="container mx-auto flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Our Team"></Subheading>
        {data.about.nodes[0].teamImage.caption}

        <Subheading heading="Purpose"></Subheading>
        <BlockContent blocks={data.about.nodes[0].purpose} />

      </section>

      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Subsystems"></Subheading>
          <section class="flex mb-4 container mx-auto">
            {data.about.nodes[0].subsystem.map(subsys => (
              <div
                class="flex-auto w-full md:w-1/3 justify-center"
                style={{
                  padding: 20,
                  margin: 30,
                  borderRadius: "25px",
                  color: "#0D1321"
                }}
                className="bg-secondary-light primary-dark inline-block my-8 p-3"
              >
                <div className="w-full flex justify-center">
                  {icons[subsys.title]}
                </div>
                <br></br>
                <h1 class="font-serif text-3xl text-center mb-2">
                  {subsys.title}
                </h1>
                <p
                  className="container mx-auto primary-dark"
                  style={{ textAlign: "center" }}
                >
                  {subsys.value}
                </p>
              </div>
            ))}
          </section>
        
      </section>
      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Members"></Subheading>

        {data.members.nodes.map(mem => (
          <section class="container mx-auto flex mb-4">
        
              <div class="w-1/4 text-center font-serif text-2xl text-center mb-2" >
                {mem.portrait && (
                  <BackgroundImg
                    fluid={mem.portrait.asset.fluid}
                    className="md:mt-0 -mt-16"
                    style={{
                      height: "25vh",
                      width: "100%",
                      backgroundSize: "contain"
                    }}
                  ></BackgroundImg>
                )}
                {mem.name}
              </div>
              <div class="w-3/4 text-center">
                <BlockContent blocks={mem.bio}></BlockContent>
              </div>

           
          </section>
        ))}

      </section>
      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Sponsors">
          {data.sponsors.nodes.map(sp => (
            <div>
              <div
                className="w-full flex justify-center"
                style={{ textAlign: "center" }}
              >
                {sp.name}
              </div>
              <Link href={sp.link}>
                <div className="block w-full md:w-1/2 mx-auto">
                  {sp.image && (
                    <Img
                      fluid={sp.image.asset.fluid}
                      className="transition opacity-75 hover:opacity-100"
                    />
                  )}
                </div>
              </Link>
            </div>
          ))}
        </Subheading>
      </section>
      <Footer></Footer>
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
    sponsors: allSanitySponsor {
      nodes {
        name
        link
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
    members: allSanityMember(sort: {fields: leadership, order: DESC}) {
      nodes {
        name
        leadership
        team
        bio: _rawBio
        portrait {
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

export default AboutPage;
