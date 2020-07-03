import React from "react";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subheading from "../components/subheading";
import Footer from "../components/footer";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";



const BlockContent = require('@sanity/block-content-to-react')

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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
            backgroundSize: "contain",
          }}
        />
      </section>

      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Our Mission">
          <BlockContent blocks={data.settings.nodes[0].mission} />
        </Subheading>
      </section>

      <section className="container mx-auto justify-center">

        <Carousel
          partialVisbile
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          // autoPlaySpeed={7000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={5000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-160-px"
        >
          {data.settings.nodes[0].gallery.map((imgData) => (
            <div className="container mx-auto">
              <img style={{ padding: "40px" }} width="1000" src={imgData.asset.fluid.src} alt={imgData.caption} />
              <p className="container mx-auto" style={{ textAlign: "center" }}>{imgData.caption}</p>
            </div>
          ))}
        </Carousel>
      </section>


      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Our Timeline">

        <Timeline lineColor={"#ddd"}>
          {data.timeline.nodes.map((item) => (

            <TimelineItem
              key={item.key}
              dateText={item.date}
              bodyContainerStyle={timelineBodyContainerStyle}
              // dateInnerStyle = ( {item.finished} ) ? {{ background: "#435058" }} : {{ background: "#F72C25" }}
              dateInnerStyle = {{ background: "#F72C25" }}
              style={{ color: "#F72C25" }}
            >
            {item.image &&
            <BackgroundImage
              fluid={item.image.asset.fluid}
              className="md:mt-0 -mt-16"
              style={{
                height: "25vh",
                width: "100%",
                backgroundSize: "contain",
              }}
            ></BackgroundImage>}
          <h3 style={{ color: "#F72C25" }}>{item.title}</h3>
          <p>{item.description}</p>
            </TimelineItem>

          ))}

      

        </Timeline>

        </Subheading>
        
      </section>

    <section>
      <Footer></Footer>
    </section>
    </Layout >
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
    timeline: allSanityTimeline(sort: {order: ASC, fields: key}) {
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

export const timelineBodyContainerStyle = {
  background: "#ddd",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
};

export default IndexPage;