module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "HEAD", "OPTIONS"],
      origin: [
        "http://localhost:1337",
        "https://api.staging.habilelabs.io",
        "https://api.habilelabs.io",
        "http://localhost:3000",
        "http://localhost:3000/",
        "https://www.habilelabs.io",
        "https://staging.habilelabs.io",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
