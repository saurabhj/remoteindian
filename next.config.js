const path = require('path');
const fs = require('fs');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
// const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
});

const { getPathMap } = require("./scripts/path-map");

/**
 * Loads the configuration for the given environment
 * @param env
 * @returns {*}
 */
const loadConfig = (env = 'dev') => {
  const configPath = `./config/${env}.json`;
  if (!fs.existsSync(configPath)) {
    console.log(`Config file not found: ${configPath}`);
    process.exit(1);
  }

  console.log(`Config file found: ${configPath}`);

  // @todo stringify the values for webpack - it doesn't understand objects
  return require(configPath);
};

const options = {
  // exportPathMap: getPathMap(),
  // env: loadConfig(process.env.NODE_ENV),
  env: { "GA_SECRET": "" },
  pageExtensions: ['jsx', 'js', 'mdx', 'md'],
  webpack(config, options) {
    // // Transforms SVGs to components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.modules.push(path.resolve('./'));

    // Allow loading images and fonts
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config
  },
};

// let nextConfig = withSass(options);
// nextConfig = withCSS(nextConfig);
// nextConfig = withMDX(nextConfig);

let nextConfig = withMDX(options);

module.exports = nextConfig;
