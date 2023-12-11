// import modul express
const express = require("express");
// import konfigurasi database
const db = require("./src/database/database");
// import semua routing dari file app.js
const allRoutes = require("./src/app");

// membuat instance express
const app = express();

//menfenisika port
const port = 3001;

//uji koneksi database
db.connect((err) => {
  if (err) {
    console.log("Koneksi database gagal ", err);
  } else {
    console.log("Koneksi database berhasil ...");
  }
});

// penggunaan midlleware agar server dapat menerima data yang dikirimkan dari user
// baik form maupun json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// memdaftarkan path /api/v1 sebagai prefix endpoint untuk semua routes
// yang didefensikan dalam allRoutes
app.use("/api/v1", allRoutes);

// jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port} ...`);
});
