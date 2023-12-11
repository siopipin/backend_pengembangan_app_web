// import modul express
const express = require("express");
const bodyParser = require("body-parser");
const webRoutes = require('./routes/web.js')

// membuat instance express
const app = express();
const port = 3001;

// handler untuk parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware use route
app.use('/web', webRoutes);


// define route untuk testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// jalankan server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});