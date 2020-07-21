import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";
import { FaRegCalendar, FaMapMarkerAlt } from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";

const OutreachPage = ({ data: { events } }) => {
  return (
    <Layout>
      <SEO title="Outreach" />
      <section className="container mb-12">
        {events.nodes.map(event => (
          <div className="flex flex-wrap mb-8" key={event.slug.current}>
            {event.image ? (
              <div className="mt-4 mb-4 w-full lg:w-1/3 lg:flex mr-6">
                <Image className="w-full" fluid={event.image.asset.fluid} />
              </div>
            ) : null}
            <div className="flex-1">
              <h3 className="heading text-3xl mb-1">{event.title}</h3>
              <div className="text-xl text-secondary-light">
                {event.date !== null ? (
                  <p className="mb-2">
                    <FaRegCalendar className="inline -mt-1 mr-2" />
                    <span className="ml-1">
                      {new Date(event.date).toLocaleString()}
                    </span>
                  </p>
                ) : null}
                {event.location !== null ? (
                  <p className="mb-2">
                    <FaMapMarkerAlt className="inline -mt-1 mr-2" />
                    <span className="ml-1">{event.location}</span>
                  </p>
                ) : null}
              </div>
              <div className="style-normal">
                <BlockContent
                  blocks={event.description}
                  serializers={{}}
                  projectId={process.env.GATSBY_SANITY_ID}
                  dataset={process.env.GATSBY_SANITY_DATASET}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    events: allSanityEvent(sort: { fields: date }) {
      nodes {
        title
        slug {
          current
        }
        description: _rawDescription
        date
        location
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
