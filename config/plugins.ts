module.exports = ({ env }) => ({

  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
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

  ezforms:{
    config:{
      captchaProvider: {
        name: 'none',
      },
      notificationProviders: []
    }
}

});