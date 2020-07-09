import React from "react";
import BackgroundImage from "gatsby-background-image";
import ScrollableAnchor from 'react-scrollable-anchor'

import Layout from "../components/layout";
import SEO from "../components/seo";
import Subheading from "../components/subheading";
import Statistics from "../components/statistics";
import Footer from "../components/footer";

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
              style={{ padding: 20, margin: 10 }}
            >
              {(project.statisticsAvaliable) ?
                <a href={`#${project.slug.current}`} >
                  <h1 class="font-serif text-3xl text-white-800 text-center mb-2 transition duration-500 ease-in-out text-white hover:text-red-600 transform hover:-translate-y-1 hover:scale-95" >
                    {/* {JSON.stringify(project.statistics)} */}
                    {project.title}
                  </h1>
                </a>
                :
                <h1 class="font-serif text-3xl text-white-800 text-center mb-2">
                  {project.title}
                </h1>
              }

              <p className="container mx-auto text-center">
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
              style={{ padding: 20, margin: 10 }}
            >
              {(project.statisticsAvaliable) ?
                <a href={`#${project.slug.current}`} >
                  <h1 class="font-serif text-3xl text-white-800 text-center mb-2 transition duration-500 ease-in-out text-white hover:text-red-600 transform hover:-translate-y-1 hover:scale-95" >
                    {/* {JSON.stringify(project.statistics)} */}
                    {project.title}
                  </h1>
                </a>
                :
                <h1 class="font-serif text-3xl text-white-800 text-center mb-2">
                  {project.title}
                </h1>
              }
              <p className="container mx-auto text-center">
                <BlockContent blocks={project.description} />
              </p>
            </div>
          ))}

        </section>


        <section>
          {data.projects.nodes.map((project) => (
            project.statisticsAvaliable &&
            <ScrollableAnchor id={project.slug.current}>
              <div>
                <Statistics title={project.title} data={project.statistics}> </Statistics>
              </div>
            </ScrollableAnchor>


          ))}
        </section>

      </section>
      <Footer></Footer>
    </Layout>
  );
}

export default ProjectsPage;

export const query = graphql`
  query {
    projects: allSanityProject(sort: {fields: completionDate}) {
      nodes {
        slug {
          current
        }
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
