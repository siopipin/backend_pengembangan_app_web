// import modul express
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const connection = require("./db.js");

// membuat instance express
const app = express();
const port = 3001;

// handler untuk parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// multer untuk upload file
const storage = multer()

// define route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/produk", (req, res) => {
    console.log(req.body);
    
    res.send("Hello World!");
  });

// route user
app.get("/users", (req, res) => {
  connection.query("SELECT * FROM tbl_users", (err, result) => {
    if (err) {
      res.status(404).json({
        "status": 404,
        "message": err,
      })
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
      res.status(201).json({
        "status": 201,
        "message": "User added successfully",
        "id": result.insertId,
      });
    }
  })
})

app.post("/users-formdata", storage.none(), (req, res) => {  //storage.none() digunakan untuk terima form-data multipart
  res.send(req.body);
})

// jalankan server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});