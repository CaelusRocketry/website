require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Caelus Rocketry`,
    description: `Taking the world's first high school liquid-fueled rocket to the edge of space.`,
    author: `Caelus Rocketry`,
    keywords: [`rocketry`, `rocket`, `liquid fueled`, `high school`, `caelus`, `project caelus`, 'caelus rocketry'],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caelus Rocketry`,
        short_name: `Caelus Rocketry`,
        start_url: `/`,
        background_color: `#0D1321`,
        theme_color: `#C7CACB`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
