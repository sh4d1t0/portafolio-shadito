module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-addon-gatsby',
    '@storybook/addon-jest',
    'tailwind-tales-addon',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
