/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@neilmckenzie",
    person: { name: "neil", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "neil", age: 32 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c4aej6av4w32`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `BbiPT-_TtUrw9YGSsBPIEPnNEH9CDrL5WKjGiWNVti4`,
      },
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `project`,
    //     path: `${__dirname}/src/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `styles`,
    //     path: `${__dirname}/src/assets/css`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-styled-components`,
    //   options: {
    //     // Add any options here
    //   },
    // },
  ],
}
