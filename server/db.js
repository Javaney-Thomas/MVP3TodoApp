const Pool = require("pg").Pool;

const pool =new Pool({
  user: "postgres",
  password: "j",
  host: "localhost",
  port: 5432,
  database: "todomvp3"
});

module.exports = pool;