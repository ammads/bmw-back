export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// Settings for CORS middleware (to allow specific origins)
module.exports.settings = {
  cors: {
    enabled: true,
    origin: ['http://localhost:5173'], // Replace with your actual frontend domains
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    headers: ['Content-Type', 'Authorization', 'X-Requested-With'],
  },
};