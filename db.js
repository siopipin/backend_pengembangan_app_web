const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root", 
  database: "db_web",
});

module.exports = connection;