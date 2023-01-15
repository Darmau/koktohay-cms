module.exports = ({ env }) => ({

  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },

  seo: {
    enabled: true,
  },

  plausible: {
    config: {
      sharedLink: `${env('PLAUSIBLE_DOMAIN')}/${env('PLAUSIBLE_PARAMS')}`,
    }
  },

  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          // "api::category.category",
        ],
      },
    },
  },

  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('HK_ACCESS_KEY_ID'),
        secretAccessKey: env('HK_ACCESS_SECRET'),
        endpoint: env('HK_ENDPOINT'),
        params: {
          Bucket: env('HK_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

});