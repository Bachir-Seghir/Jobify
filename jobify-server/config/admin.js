module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd76a4353a44845ee87742e428fd5b8a9'),
  },
});
