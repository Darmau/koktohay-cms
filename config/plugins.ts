module.exports = ({ env }) => ({

  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 10,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
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

  ezforms: {
    config: {
      captchaProvider: {
        name: 'recaptcha',
        config: {
          secretKey: env('RECAPTCHA_SECRET_KEY'),
        }
      },
      enableFormName: true,
      notificationProviders: []
    }
  },

});