export default ({ env }) => ({

  connection: {
    client: env('DATABASE') || 'mysql',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL'),
      charset: 'utf8mb4',
      collation: 'utf8mb4_unicode_ci',
    },
  },
});
