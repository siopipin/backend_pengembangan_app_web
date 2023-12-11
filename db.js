const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root", //sesuaikan dengan user database anda
  password: "root", //sesuaikan dengan password database anda
  database: "db_web",
});

module.exports = connection;
