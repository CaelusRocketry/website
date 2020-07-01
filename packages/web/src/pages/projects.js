import React from "react";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subheading from "../components/subheading";
import Statistics from "../components/statistics";

const BlockContent = require('@sanity/block-content-to-react')


function ProjectsPage({ data }) {
  return (
    <Layout>
      <SEO title="Projects" />

      <section className="flex flex-col bg-primary-dark justify-center">
        <Subheading heading="Projects in the Works"></Subheading>
        <section class="flex mb-4 container mx-auto">
          {data.projects.nodes.map((project) => (
            project.inProgress &&
            <div
              class="flex-auto w-full md:w-1/3 justify-center"
              style={{ padding: 20, margin: 30 }}
            >
              <h1 class="font-serif text-3xl text-white-800 text-center mb-2">
                {/* {JSON.stringify(project.statistics)} */}
                {project.title}
              </h1>
              <p className="container mx-auto" style={{ textAlign: "center" }}>
                <BlockContent blocks={project.description} />
              </p>
            </div>
          ))}
        </section>

        <Subheading heading="Projects for the Future"></Subheading>
        <BackgroundImage
          fluid={data.projects.nodes[2].image.asset.fluid}
          className="md:mt-0 -mt-16"
          style={{
            height: "55vh",
            width: "100%",
            backgroundSize: "contain",
          }}
        />

        <section class="flex mb-4 container mx-auto">
          {data.projects.nodes.map((project) => (
            !project.inProgress &&
            <div
              class="flex-auto w-full md:w-1/3 justify-center"
              style={{ padding: 20, margin: 30 }}
            >
              <h1 class="font-serif text-3xl text-white-800 text-center mb-2">
                {project.title}
              </h1>
              <p className="container mx-auto" style={{ textAlign: "center" }}>
                <BlockContent blocks={project.description} />
              </p>
            </div>
          ))}

        </section>

        <section>
          {data.projects.nodes.map((project) => (
            project.statisticsAvaliable &&
            <Statistics title={project.title} data={project.statistics}></Statistics>
          ))}
        </section>

      </section>
    </Layout>
  );
}

export default ProjectsPage;

export const query = graphql`
  query {
    projects: allSanityProject(sort: {fields: completionDate}) {
      nodes {
        title
        description:_rawDescription
        inProgress
        statisticsAvaliable
        statistics {
          title
          value
        }
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
