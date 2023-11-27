const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", //sesuaikan dengan user database anda
  password: "root", //sesuaikan dengan password database anda
  database: "db_web",
});

connection.connect(function (err) {
  if (err) {
    console.log("koneksi gagal ", err);
  } else {
    console.log("connecting to database");
  }
});

module.exports = connection;
