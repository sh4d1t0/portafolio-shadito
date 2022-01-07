module.exports = {
  siteMetadata: {
    siteUrl: 'https://sh4d1t0.github.io',
    title: 'Portafolio Shadito',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-transformer-remark',
  ],
}
