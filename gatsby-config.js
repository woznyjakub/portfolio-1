module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `Jakub Woźny - Portfolio`,
    description: ` Jakub Woźny front-end developer - portfolio`,
    author: `Jakub Woźny`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
