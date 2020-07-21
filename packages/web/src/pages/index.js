import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaLongArrowAltDown } from "react-icons/fa";

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
        className="flex bg-primary-dark z-10 overflow-hidden h-full lg:-mt-16"
        style={{
          minHeight: "95vh"
        }}
      >
        <div className="relative" style={{ height: "100%" }}>
          <div id="stars-1"></div>
          <div id="stars-2"></div>
          <div id="stars-3"></div>
        </div>
        <div className="flex items-center justify-center mx-8 lg:mx-32 my-8 lg:my-20 w-full">
          <div className="flex flex-wrap h-full w-full overflow-hidden">
            <div className="bg-accent p-6 lg:p-12 w-full lg:w-1/2 z-10 flex flex-col justify-between">
              <div>
                <h1
                  className="uppercase leading-snug mb-2"
                  style={{ fontSize: "calc(4vw + 30px)" }}
                >
                  <span className="heading" data-text="Project">
                    Project
                  </span>{" "}
                  <span className="heading" data-text="Caelus">
                    Caelus
                  </span>
                </h1>
                <p className="mb-4" style={{ fontSize: "calc(1.5vw + 15px)" }}>
                  The first high-school group to take a liquid-fuel rocket to
                  space.
                </p>
              </div>
              <div className="text-lg">
                <AnchorLink href="#home-mission">
                  <span className="transition opacity-75 hover:opacity-100 inline-block p-2 border-4 border-secondary-light mr-4 mb-4 md:mb-0">
                    Mission
                    <FaLongArrowAltDown className="inline ml-2" />
                  </span>
                </AnchorLink>
                <AnchorLink href="#home-timeline">
                  <span className="transition opacity-75 hover:opacity-100 inline-block p-2 border-4 border-secondary-light">
                    Timeline
                    <FaLongArrowAltDown className="inline ml-2" />
                  </span>
                </AnchorLink>
              </div>
            </div>
            <div className="w-full lg:w-1/2 border-4 border-accent flex items-center justify-center">
              <BackgroundImage
                fluid={data.rocket.childImageSharp.fluid}
                className="md:mt-0 -mt-16"
                style={{
                  height: "50vh",
                  width: "100%",
                  backgroundSize: "contain"
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-secondary-light text-primary-dark py-12 mb-12"
        id="home-mission"
      >
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
            infiniteLoop={true}
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
      <section className="w-full md:w-2/3 mx-auto px-8" id="home-timeline">
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
