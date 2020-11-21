import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";
import { FaLongArrowAltRight } from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ProjectsPage = ({ data }) => {
  const dateToString = dateString => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    return `${month} ${date.getFullYear()}`;
  };

  return (
    <Layout>
      <SEO title="Projects" />
      {["completed", "current", "planned"].map((status, i) => {
        let statusText;
        switch (status) {
          case "completed":
            statusText = "Completed";
            break;
          case "current":
            statusText = "In-Progress";
            break;
          case "planned":
            statusText = "Planned";
            break;
          default:
            break;
        }
        return (
          statusText && (
            <section className="container mb-12" key={i}>
              <h2
                className="heading uppercase mb-4 text-4xl"
                data-text={statusText}
              >
                {statusText}
              </h2>
              <div>
                {data.projects.nodes
                  .sort((a, b) => a.key - b.key)
                  .map(project => {
                    if (project.status === status) {
                      return (
                        <div
                          className="flex flex-wrap mb-8"
                          key={project.slug.current}
                        >
                          {project.image ? (
                            <div className="mt-4 mb-4 w-full lg:w-1/3 lg:flex mr-6">
                              <Image
                                className="w-full"
                                style={{ height: "500px" }}
                                fluid={project.image.asset.fluid}
                              />
                            </div>
                          ) : null}
                          <div className="flex-1">
                            <h3 className="heading text-3xl mb-1">
                              {project.title}
                            </h3>
                            <Link to={`/projects/${project.slug.current}`}>
                              <span className="block text-accent text-xl mb-2">
                                Read More
                                <FaLongArrowAltRight className="text-2xl inline ml-2" />
                              </span>
                            </Link>
                            <p className="text-xl mb-2 text-secondary-light">
                              {status == "completed"
                                ? "Completed:"
                                : "Estimated Completion:"}
                              <span className="ml-1">
                                {dateToString(project.completionDate)}
                              </span>
                            </p>
                            <div className="style-normal">
                              {project.summary}
                            </div>
                          </div>
                        </div>
                      );
                    } else return null;
                  })}
              </div>
            </section>
          )
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    projects: allSanityProject(sort: { fields: completionDate }) {
      nodes {
        key
        summary
        slug {
          current
        }
        status
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
  }
`;

export default ProjectsPage;
