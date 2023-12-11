const express = require("express");
const route = express.Router();
// import semua controllers dari file mahasiswaController.js
const mahasiswaControllers = require("../controllers/mahasiswaControllers");

// mendefenisikan route read all untuk mengambil semua data mahasiswa
route.get("/", mahasiswaControllers.getAll);

// mendefenisikan route read one untuk mengambil salah satu data mahasiswa
// berdasarkan id
route.get("/:id", mahasiswaControllers.getOne);

// mendefenisikan route create untuk mengisi data mahasiswa ke database
route.post("/", mahasiswaControllers.insert);

// mendefenisikan route update untuk melakukan perubahan terhadap
// data yang sudah tersimpan pada database
route.patch("/:id", mahasiswaControllers.update);

// mendefenisikan route delete untuk mengahpus
// data yang sudah tersimpan pada database
route.delete("/:id", mahasiswaControllers.remove);

// ekspor route agar semua route yang sudah di defenisikan
// bisa di akses dari luar file
module.exports = route;
