module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-3-216-92-193.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "df64q6252f10t2"),
        username: env("DATABASE_USERNAME", "tmkzhtfnbnkrsf"),
        password: env("DATABASE_PASSWORD", "51c5ccc90d2f765eac74bbe621c893dea029b7f52f5021303019dc9b052e8c96"),
        schema: "public",
        ssl: { rejectUnauthorized: false }
      },
      options: {}
    }
  }
});
