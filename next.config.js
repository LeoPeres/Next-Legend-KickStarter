/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  /* config options here */
  images: {
    domains: ["github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Optimize bundle size by excluding certain packages from the client bundle
  transpilePackages: [],
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize bundle size
  swcMinify: true,
  // Configure webpack to optimize bundle size
  webpack: (config, { dev, isServer }) => {
    // Only run in production client builds
    if (!dev && !isServer) {
      // Split chunks more aggressively for production builds
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk for third-party libraries
          vendor: {
            name: "vendor",
            chunks: "all",
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
          },
          // Common chunk for code shared between pages
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }
    return config;
  },
};

// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // An auth token is required for uploading source maps to Sentry.
  // You can get an auth token from https://sentry.io/settings/account/api/auth-tokens/
  // The token must have `project:releases` and `org:read` scopes for source map upload.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: true, // Suppresses all logs
};

// For development, we'll skip the Sentry configuration
// In production, we would use the Sentry configuration
const configWithBundleAnalyzer = withBundleAnalyzer(nextConfig);

module.exports =
  process.env.NODE_ENV === "development" || process.env.SKIP_SENTRY === "true"
    ? configWithBundleAnalyzer
    : withSentryConfig(configWithBundleAnalyzer, sentryWebpackPluginOptions, {
        // Sentry SDK options
        // Add options here
      });
