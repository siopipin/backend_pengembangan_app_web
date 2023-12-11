// import modul mysql2
const mysql = require("mysql2");

// membuat koneksi kedatabase
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "universitas_xyz_db",
});

// ekspor db agar koneksi database bisa di akses dari luar
module.exports = db;
