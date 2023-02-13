module.exports = ({env}) => ([
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            // 'dl.airtable.com',
            `${env('HK_BUCKET')}.${env('HK_ENDPOINT')}`,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            // 'dl.airtable.com',
            `${env('HK_BUCKET')}.${env('HK_ENDPOINT')}`,
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]);
