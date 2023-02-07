module.exports = ({ env }) => ({

  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
        album: {
          field: 'slug',
          references: 'title',
        },
        video: {
          field: 'slug',
          references: 'title',
        },
        portfolio: {
          field: 'slug',
          references: 'title',
        },
        articleCategory: {
          field: 'slug',
          references: 'title',
        },
        articleTag: {
          field: 'slug',
          references: 'title',
        },
        albumCategory: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },

  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  seo: {
    enabled: true,
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