import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SponsorsPage = ({ data }) => {
  const color = (level) => {
    switch (level) {
      case "platinum":
        return "slategray";
      case "gold":
        return "goldenrod";
      case "silver":
        return "silver";
      default:
        break;
    }
  };

  return (
    <Layout>
      <SEO title="Sponsors" />
      <section className="container mb-12">
        {["platinum", "gold", "silver"].map((level) => (
          <div className="mb-8">
            <h2
              className="heading text-4xl mb-4"
              data-text={level.toUpperCase()}
              style={{
                textShadow: `0 0 3px ${color(level)}, 0 0 3px ${color(level)}`,
              }}
            >
              {level.toUpperCase()}
            </h2>
            <div className="flex flex-wrap -mx-4">
              {data.sponsors.nodes.map((sponsor) => {
                if (sponsor.level === level) {
                  return (
                    <div className="w-full mb-8 md:w-1/2 px-4">
                      <a href={sponsor.link}>
                        <Image
                          fluid={sponsor.image.asset.fluid}
                          alt={sponsor.name}
                          className="transition mb-4 opacity-75 hover:opacity-100"
                          imgStyle={{ objectFit: "contain" }}
                          style={{ height: "200px" }}
                        />
                       {/*<h3 className="text-3xl">{sponsor.name}</h3>*/}
                      </a>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    sponsors: allSanitySponsor {
      nodes {
        name
        link
        level
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default SponsorsPage;
