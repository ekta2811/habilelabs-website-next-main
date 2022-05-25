/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.PUBLIC_SITEMAP_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // <= exclude here
}
