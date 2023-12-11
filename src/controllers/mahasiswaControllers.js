// import konfigurasi database untuk menjalan query
const db = require("../database/database");

// mendefenisikan controller get all
// untuk mengambil semua daya mahasiswa
const getAll = (req, res) => {
  const query =
    "SELECT nim, nama, email, kelas, jenis_kelamin, nama_prodi as program_studi, semester, created_at, updated_at FROM mahasiswa INNER JOIN program_studi ON id_program_studi = program_studi.id";
  db.query(query, [], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "get mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "get mahasiswa berhasil",
        mahasiswa: result,
      });
    }
  });
};

// mendefenisikan controller get one
// untuk mengambil salah satu data mahasiswa
const getOne = (req, res) => {
  const id = req.params.id;
  const query =
    "SELECT  nim, nama, email, kelas, jenis_kelamin, nama_prodi as program_studi, semester, created_at, updated_at FROM mahasiswa INNER JOIN program_studi ON id_program_studi = program_studi.id WHERE mahasiswa.id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "get mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "get mahasiswa berhasil",
        mahasiswa: result[0],
      });
    }
  });
};

// mendefenisikan controller insert
// untuk menyimpan data mahasiswa kedalam database
const insert = (req, res) => {
  const mahasiswa = req.body;
  const query = "INSERT INTO mahasiswa SET ?";

  db.query(query, mahasiswa, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "insert mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(201).json({
        message: "insert mahasiswa berhasil",
      });
    }
  });
};

// mendefenisikan controller insert
// untuk memperbaharui salah satu data mahasiswa
// berdasarkan id
const update = (req, res) => {
  const id = req.params.id;
  const mahasiswa = req.body;
  const query = `UPDATE mahasiswa SET ? WHERE id = ${id}`;

  db.query(query, mahasiswa, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "upadte mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "update mahasiswa berhasil",
        mahasiswa: mahasiswa,
      });
    }
  });
};

// mendefenisikan controller remove
// untukmengahpus data mahasiswa dari database
const remove = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM mahasiswa WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(400).json({
        message: "delete mahasiswa gagal",
        serverMessage: err,
      });
    } else {
      res.status(200).json({
        message: "delete mahasiswa berhasil",
      });
    }
  });
};

// ekspor semua controllers agar bisa di akses dari luar
module.exports = {
  getAll,
  insert,
  update,
  remove,
  getOne,
};
