const express = require("express");
const app = express();
// import semua route mahasiswa dari file mahasiswa.js
const mahasiswa = require("./routes/mahasiswa");

// memdaftarkan path /mahasiswa sebagai endpoint untuk semua routes dari mahasiswa
app.use("/mahasiswa", mahasiswa);

//ekspor app agar semua routes yang ada pada file ini
// bisa di akases dari luar
module.exports = app;
