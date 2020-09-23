module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-54-172-173-58.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d489errk8mqgmc"),
        username: env("DATABASE_USERNAME", "tmkzhtfnbnkrsf"),
        password: env("DATABASE_PASSWORD", "2f77a5c3232744c21798fc2c1765a51e52b3a10f73e955f6f1f287f0edbe31c7"),
        schema: "public",
        ssl: { rejectUnauthorized: false }
      },
      options: {}
    }
  }
});
