const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  config.resolve.extensions.push(".mjs");
  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        zlib: require.resolve("browserify-zlib"),
        path: require.resolve("path-browserify"),
      },
    },
  });

  return {
    ...config,
    // This is needed to not show the warning about this modules don't have src files, only on dist (build)
    ignoreWarnings: [
      {
        module: /node_modules\/@walletconnect/,
      },
      {
        module: /node_modules\/eth-rpc-errors/,
      },
      {
        module: /node_modules\/json-rpc-engine/,
      },
      {
        module: /node_modules\/@metamask/,
      },
      {
        module: /node_modules\/@gnosis.pm/,
      },
      {
        module: /node_modules\/eth-json-rpc-middleware/,
      },
      {
        module: /node_modules\/arweave/,
      },
      {
        module: /node_modules\/arbundles/,
      },
      {
        module: /node_modules\/@project-serum/,
      },
      {
        module: /node_modules\/@metaplex-foundation/,
      },
      {
        module: /node_modules\/@bundlr-network/,
      },
      {
        module: /node_modules\/@particle-network/,
      },
      {
        module: /node_modules\/@solana/,
      },
      {
        module: /node_modules\/jsbi/,
      },
      {
        module: /node_modules\/source-map-loader/,
      },
    ],
  };
};
