// .storybook/main.js
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');
module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need
    const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
        test: /\.svg$/,
        enforce: "pre",
        loader: require.resolve("@svgr/webpack")
    });
    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    config.module.rules.push({
      test: /\.(scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /\.(ts|tsx)?$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
            configFileName: "./.storybook/tsconfig.json"
          }
        },
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ],
      exclude: /node_modules/,
    });

    config.resolve = {
      ...config.resolve,
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      plugins: [new TsconfigPathsPlugin({/* options: see below */})]
    }

    // Return the altered config
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}