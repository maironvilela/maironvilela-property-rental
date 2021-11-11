import 'dotenv/config';

const { REDIS_HOST, REDIS_PORT } = process.env;

console.log('Config redis');

export default {
  host: REDIS_HOST,
  port: REDIS_PORT,
};
