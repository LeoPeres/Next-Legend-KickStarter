/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  /* config options here */
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

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
