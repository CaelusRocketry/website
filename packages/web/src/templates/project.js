import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ProjectPage = ({ data: { project } }) => {
  const dateToString = dateString => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    return `${month} ${date.getFullYear()}`;
  };

  return (
    <Layout>
      <SEO title={`${project.title} | Projects`} />
      <section className="container mb-12">
        <div className="flex flex-wrap border-4 border-accent">
          {project.image ? (
            <div className="w-full md:w-1/2">
              <Image
                className="h-full border-b-4 md:border-r-4 md:border-b-0 border-accent"
                fluid={project.image.asset.fluid}
                alt={project.title}
              />
            </div>
          ) : null}
          <div
            className={`w-full p-6 bg-primary-light text-primary-dark ${
              project.image ? "md:w-1/2" : ""
            }`}
          >
            <h1 className="text-4xl font-bold leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl mb-2 text-secondary-dark">
              Estimated Completion:
              <span className="ml-1">
                {dateToString(project.completionDate)}
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="container mb-12">
        <h2 className="heading uppercase mb-2 text-4xl" data-text="Description">
          Description
        </h2>
        <div className="body">
          <BlockContent blocks={project.description} serializers={{}} />
        </div>
      </section>
      <section className="container">
        <h2 className="heading uppercase mb-2 text-4xl" data-text="Statistics">
          Statistics
        </h2>
        {project.statistics && project.statistics.length > 0 ? (
          <div>
            {project.statistics.map((statistic, i) => (
              <div
                className={`transition p-4 flex justify-between hover:bg-red-300 hover:text-primary-dark
              ${
                i < project.statistics.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
              >
                <p>{statistic.title}</p>
                <p>{statistic.value}</p>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    project: sanityProject(_id: { eq: $id }) {
      description: _rawDescription
      slug {
        current
      }
      inProgress
      statistics {
        title
        value
      }
      title
      completionDate
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default ProjectPage;
