const config = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
module.exports = withBundleAnalyzer(config)
