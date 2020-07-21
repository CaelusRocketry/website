import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

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
          <h1 className="md:text-5xl text-4xl font-bold border-b-4 border-dashed border-accent inline-block mb-4">
            Project Caelus
          </h1>
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
      <section className="bg-secondary-light text-primary-dark py-12 mb-12">
        <div className="container pb-12">
          <h2 className="heading text-4xl mb-4 uppercase" data-text="Mission">
            Mission
          </h2>
          <div className="style-normal">
            <BlockContent
              blocks={data.settings.mission}
              serializers={{}}
              projectId={process.env.GATSBY_SANITY_ID}
              dataset={process.env.GATSBY_SANITY_DATASET}
            />
          </div>
        </div>
        <div className="container">
          <Carousel
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            dynamicHeight={true}
            showThumbs={false}
            showIndicators={true}
            showStatus={true}
            // autoPlaySpeed={7000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={5000}
            className="bg-secondary-light"
          >
            {data.settings.gallery.map(image => (
              <div className="bg-secondary-light relative" key={image["_key"]}>
                <Image fluid={image.asset.fluid} alt={image.caption} />
                <p className="bg-secondary-light py-4 mb-12 absolute bottom-0 left-0 w-full">
                  {image.caption}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="w-full md:w-2/3 mx-auto px-8">
        <h2 className="heading text-4xl mb-8 uppercase" data-text="Timeline">
          Timeline
        </h2>
        <Timeline lineColor={"#C7CACB"} className="w-full" animate={false}>
          {data.timeline.nodes.map(timelineItem => (
            <TimelineItem
              key={timelineItem.key}
              dateText={timelineItem.date}
              bodyContainerStyle={{
                background: "#ddd",
                padding: "20px",
                borderRadius: "2px",
                boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
              }}
              dateInnerStyle={
                timelineItem.finished
                  ? { background: "#435058" }
                  : { background: "#F72C25" }
              }
              style={{
                width: "100%",
                color: timelineItem.finished ? "#435058" : "#F72C25"
              }}
            >
              {timelineItem.image && (
                <Image
                  fluid={timelineItem.image.asset.fluid}
                  className="mb-4 w-full"
                />
              )}
              <h3 className="heading text-xl">{timelineItem.title}</h3>
              <p className="mt-2">{timelineItem.description}</p>
            </TimelineItem>
          ))}
        </Timeline>
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
    settings: sanitySettings {
      mission: _rawMission
      gallery {
        _key
        caption
        asset {
          fluid {
            ...GatsbySanityImageFluid
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
