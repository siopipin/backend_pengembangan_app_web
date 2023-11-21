// import modul express
const express = require('express');

// membuat instance express
const app = express();
const port = 3000;

// define route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// jalankan server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});