module.exports = {
  apps: [
    {
      name: 'habilelabs-cms',
      script: 'yarn',
      args: 'start',
      env: {
          "HOST": "0.0.0.0",
          "PORT": 1337,
          "APP_KEYS": "SqW7Z+nP2Lir4AfbUBocRQ==,RSuHsOIXQJn2x9UWqwNhBQ==,JZEYxB9OgcNjp6Se/8FH/Q==,Aoj9NhGv7Lgcy1AKzymHhw==",
          "JWT_SECRET": "28f9fb02-3eaf-4296-ac2c-3705bece703f",
          "API_TOKEN_SALT": "8b1f369ac6f7c15f068b82e89b977d65",
          "PUBLIC_URL": "https://api.staging.habilelabs.io",
          "NODE_ENV": "production"
        }
    },
  ],
};
