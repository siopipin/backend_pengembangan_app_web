// import modul express
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const connection = require("./db.js");
const webRoutes = require('./routes/web.js')

// membuat instance express
const app = express();
const port = 3001;

// handler untuk parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/web', webRoutes);

// multer untuk upload file
const storage = multer()

// define route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// route user
app.get("/users", (req, res) => {
  connection.query("SELECT * FROM tbl_users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/users", (req, res) => {  // kirim data dari json body.
  connection.query("INSERT INTO tbl_users SET ?", req.body, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.send(result);
    }
  })
})

app.post("/users-formdata", storage.none(), (req, res) => {  //storage.none() digunakan untuk terima form-data multipart
  res.send(req.body);
})

// tambahkan fungsi baru.

// jalankan server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});