import React from "react";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subheading from "../components/subheading";
import Footer from "../components/footer";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


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
        <Subheading heading={data.posts.nodes[1].title}>{data.posts.nodes[1].description}</Subheading>
      </section>

      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Our Timeline"></Subheading>

        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="November 26, 2018"
            dateInnerStyle={{ background: '#435058' }}
            bodyContainerStyle={ timelineBodyContainerStyle }
          >

          <BackgroundImage
            fluid={data.team.childImageSharp.fluid}
            className="md:mt-0 -mt-16"
            style={{
              height: "25vh",
              width: "100%",
              backgroundSize: "contain",
            }}></BackgroundImage>
            <h3 style={{ color: '#F72C25' }}>Project Caelus Formed</h3>
            <p>The initial Project Caelus team was created after a long round of interviews. </p>
          </TimelineItem>

          <TimelineItem
            key="002"
            dateText="Summer 2020"
            style={{ color: '#F72C25' }}
            bodyContainerStyle={ timelineBodyContainerStyle }
          >
          <BackgroundImage
            fluid={data.crossSection.childImageSharp.fluid}
            className="md:mt-0 -mt-16"
            style={{
              height: "25vh",
              width: "100%",
              backgroundSize: "contain",
            }}></BackgroundImage>
            <h3 style={{ color: '#F72C25' }}>Aphlex 1B - Ethanol Cold Flow</h3>
            <p>Perform piping, pressurization and flight software checks.</p>
          </TimelineItem>

          <TimelineItem
            key="003"
            dateText="Winter 2020"
            style={{ color: '#F72C25' }}
            bodyContainerStyle={ timelineBodyContainerStyle }
          >
            <h3 style={{ color: '#F72C25' }}>Aphlex 1B – Nitrous Oxide Cold Flow</h3>
            <p>Perform software, plumbing, procedures, and nitrous oxide checks.</p>
          </TimelineItem>

          <TimelineItem
            key="004"
            dateText="Summer 2021"
            style={{ color: '#F72C25' }}
            bodyContainerStyle={ timelineBodyContainerStyle }
          >
            <h3 style={{ color: '#F72C25' }}>Aphlex 1B – Injector Test</h3>
            <p>Test pressurization, combustion stability, and atomization of injector.</p>
          </TimelineItem>

          <TimelineItem
            key="005"
            dateText="Winter 2021"
            style={{ color: '#F72C25' }}
            bodyContainerStyle={ timelineBodyContainerStyle }
          >
            <h3 style={{ color: '#F72C25' }}>Aphlex II</h3>
            <p>Fully 3D-printed engine with Methalox propellant. Employ cryogenic procedures.</p>
          </TimelineItem>

          <TimelineItem
            key="006"
            dateText="Spring 2022"
            style={{ color: '#F72C25' }}
            bodyContainerStyle={ timelineBodyContainerStyle }
          >

            <h3 style={{ color: '#F72C25' }}>Castillo I</h3>
            <p>Reach a 5,000 ft apogee employing Aphlex I engine.</p>
          </TimelineItem>


          <TimelineItem
            key="007"
            dateText="Winter 2022"
            style={{ color: '#F72C25' }}
            bodyContainerStyle={ timelineBodyContainerStyle }
          >
            <h3 style={{ color: '#F72C25' }}>Castillo II</h3>
            <p>Further communications testing, reach a higher apogee.</p>
          </TimelineItem>


          <TimelineItem
            key="008"
            dateText="Spring 2023"
            style={{ color: '#F72C25' }}
            bodyContainerStyle={ timelineBodyContainerStyle }
          >

          <BackgroundImage
            fluid={data.rocket.childImageSharp.fluid}
            className="md:mt-0 -mt-16"
            style={{
              height: "25vh",
              width: "100%",
              backgroundSize: "contain",
            }}></BackgroundImage>

            <h3 style={{ color: '#F72C25' }}>Castillo III</h3>
            <p>The final goal of our project: reach the Karman line, 100km above sea level, and successfully recover the rocket.</p>
          </TimelineItem>

        </Timeline>
      </section>

      <section>
        <Footer>hi</Footer>
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
    },
    team: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
          fluid {
          ...GatsbyImageSharpFluid
          }
      }
  },
  crossSection: file(relativePath: { eq: "cross-section.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },
    posts: allSanityPost {
      nodes {
        title
        description
      }
    }
  }
`;

export const timelineBodyContainerStyle = {
  background: '#ddd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
};

export default IndexPage;
