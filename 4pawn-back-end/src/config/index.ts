export default () => ({
  port: +process.env.APP_PORT || 3001,
  jwt_secret: process.env.JWT_SECRET || 'JWT_SECRET',
  database: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 3002,
  },
});
