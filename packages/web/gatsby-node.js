const axios = require("axios");
const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~css": path.resolve(__dirname, "src/css"),
        "~images": path.resolve(__dirname, "src/images"),
        //'~utils': path.resolve(__dirname, 'src/utils'),
        "~templates": path.resolve(__dirname, "src/templates")
      }
    }
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const query = await graphql(`
    {
      projects: allSanityProject {
        nodes {
          slug {
            current
          }
          id: _id
        }
      }
    }
  `);
  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const Projects = query.data.projects.nodes;
  const ProjectTemplate = path.resolve("./src/templates/project.js");
  Projects.forEach(project => {
    createPage({
      path: `/projects/${project.slug.current}`,
      component: ProjectTemplate,
      context: {
        id: project.id
      }
    });
  });
};
