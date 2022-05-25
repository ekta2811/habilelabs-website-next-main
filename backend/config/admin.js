module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '56523e92e6fd59273e234d9f03b84f6e'),
  },
});
