const Pool = require("pg").Pool;

exports.pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: process.env.DB_NAME,
});
