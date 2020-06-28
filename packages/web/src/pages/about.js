import React from "react";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subheading from "../components/subheading";

function AboutPage({ data }) {
  return (
    <Layout>
      <SEO title="About Us" />
      {/* <div>
                <h2 className="bg-secondary-light text-2xl font-bold inline-block my-8 p-3">Our team</h2>
            </div> */}

      <BackgroundImage
        fluid={data.file.childImageSharp.fluid}
        className="md:mt-0 -mt-16"
        style={{
          height: "55vh",
          width: "100%",
          backgroundSize: "contain",
        }}
      />
      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading={data.posts.nodes[5].title}>
          {data.posts.nodes[5].description}
        </Subheading>
        <Subheading heading={data.posts.nodes[1].title}>
          {data.posts.nodes[1].description}
        </Subheading>
        <Subheading heading="Subsystems"></Subheading>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    projects: allSanityMembers(sort: {fields: completionDate}) {
      nodes {
        Name
        Position
        bio: _rawBio
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

export default AboutPage;
