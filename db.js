const Pool = require("pg").Pool;

exports.pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "postgres",
  port: 5432,
  database: "students",
});
