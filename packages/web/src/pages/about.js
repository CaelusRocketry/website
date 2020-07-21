import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";
import {
  FaRegFileCode,
  FaAtom,
  FaPencilRuler,
  FaUserAlt
} from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="container mb-12">
        <Image fluid={data.settings.teamImage.asset.fluid} />
        <caption className="opacity-75 text-base block w-full mt-6">
          {data.settings.teamImage.caption}
        </caption>
      </section>
      <section className="container mb-12">
        <h2 className="heading uppercase mb-4 text-4xl" data-text="Mission">
          Mission
        </h2>
        <div className="body">
          <BlockContent blocks={data.settings.mission} serializers={[]} />
        </div>
      </section>
      <section className="container mb-12">
        <h2 className="heading uppercase mb-6 text-4xl" data-text="Subsystems">
          Subsystems
        </h2>
        <div>
          {[
            {
              icon: <FaRegFileCode />,
              title: "Programming",
              text: `Codes ground software and flight software, which is necessary
                for monitoring the sensor values during tests.`
            },
            {
              icon: <FaAtom />,
              title: "Propulsion",
              text: `Does rocket calculations, uses CAD to design rocket parts, and utilizes MATLAB for flight simulations.`
            },
            {
              icon: <FaPencilRuler />,
              title: "Outreach",
              text: `Contacts sponsors, organizes events, and reaches out to other non-profits for partnerships with events.`
            }
          ].map(x => (
            <div className="flex mb-8">
              <div className="mr-6 mt-2" style={{ fontSize: "5rem" }}>
                {x.icon}
              </div>
              <div className="flex-1">
                <h3 className="heading text-3xl mb-1">{x.title}</h3>
                <p>{x.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container">
        <h2 className="heading uppercase mb-6 text-4xl" data-text="Members">
          Members
        </h2>
        <div>
          {data.members.nodes.map((member, i) => (
            <div
              className={`flex flex-wrap mb-6 ${
                i % 2 == 0 ? "text-left" : "flex-row-reverse text-right"
              }`}
            >
              <div
                className={`mt-4 w-full lg:w-1/4 lg:flex ${
                  i % 2 == 0 ? "mr-6 justify-end" : "ml-6 justify-start"
                }`}
              >
                {member.portrait ? (
                  <Image
                    className="max-w-full"
                    fixed={member.portrait.asset.fixed}
                  />
                ) : (
                  <FaUserAlt className="mx-4" style={{ fontSize: "6rem" }} />
                )}
              </div>
              <div className="flex-1">
                <h3 className="heading text-3xl mb-1">{member.name}</h3>
                <div className="body">
                  <BlockContent blocks={member.bio} serializers={[]} />
                </div>
              </div>
            </div>
          ))}
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
    members: allSanityMember {
      nodes {
        name
        team
        bio: _rawBio
        portrait {
          asset {
            fixed(height: 200, width: 200) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
