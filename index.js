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
const formdata = multer();

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

app.post("/users", (req, res) => {
  // kirim data dari json body.
  connection.query("INSERT INTO tbl_users SET ?", req.body, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.send(result);
    }
  });
});

app.post("/users-formdata", formdata.none(), (req, res) => {
  //storage.none() digunakan untuk terima form-data multipart
  res.send(req.body);
});

// tambahkan data customer
app.get("/customers", (req, res) => {
  connection.query("select * from tbl_users", (err, result) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.json({data: result})
    }
  })
});

app.get("/customers/:id", (req, res) => {
  const id = req.params.id

  connection.query(`SELECT * FROM tbl_users WHERE id = ?`, [id], (err, result) => {
    if(err) {
      res.status(400).send("err")
    } else {
      if(result.length <= 0) {
      res.status(404).send("tidak ada data")
      } else {
        res.json({data: result})
      }
    }
  })
})

app.post("/customers", (req, res) => {
  
  const data = req.body;
  // connection.query("INSERT INTO tbl_users SET ?", [data], (err, result) => {
  //   if(err) {
  //     res.status(400).send(err)
  //   } else {
  //     if(result.affectedRows === 1) {
  //       res.json({msg: "Success"})
  //     } else {
  //       res.json({msg: "not success"})
  //     }
  //   }
  // })

  const name = req.body.name1

  const query = `INSERT INTO Customers (CustomerName, ContactName, Address City, PostalCode, Country) VALUES (?, ?, ?, ?,?,?)`

  connection.query(query, [name,b,c,d,e,f], (err, result) => {
    if(err) {
      res.status(400).send(err)
    } else {
      if(result.affectedRows === 1) {
        res.json({msg: "Success"})
      } else {
        res.json({msg: "not success"})
      }
    }
  })


})

// tambahkan data customer
app.post("/product", formdata.none(), (req, res) => {
  const kumpulandata = req.body;
  //tampilkan data user dengan id = 1
  res.json({ data: kumpulandata });
});

// route query

app.get("/users/detail", (req, res) => {
  const jk = req.query.jk;
  const hobby = req.query.hobby;
});

// jalankan server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
