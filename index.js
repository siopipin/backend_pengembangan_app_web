// import modul express
const express = require("express");
const bodyParser = require("body-parser");
const webRoutes = require('./routes/web.js')
const cors = require('cors')
const connection = require('./db.js')


// membuat instance express
const app = express();
const port = 3001;


// handler untuk parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
// middleware use route
app.use('/web', webRoutes);


// define route untuk testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/mobile/users', async (req, res) => {
  try {
    const [result] = await connection.execute('select * from tbl_users')

    return res.status(201).json({
      msg: "hallo",
      hasil: result
    })
  } catch (err) {
    console.log(error);
  }
})

app.get('/mobile/users/:idKTP', async (req, res) => {
  try {
    const idKTP = req.params.idKTP
    const [hasil] = await connection.execute('select * from tbl_users where id = ?', [idKTP])
    
    console.log('hallo apakah ini jalan??');
    console.log(`ini adalah hasil: ${hasil}`);
    
    return res.status(201).json({
      status: 201,
      message: 'success',
      data: hasil
    })
  } catch (error) {
    console.log(`ada kesalahan index.js/get(mobile.users/idKTP): ${error}`);
  }
})

app.get('/mobile/users-detail/', async (req, res) => {
  try {
    const idKTP = req.query.idKTP
    const [hasil] = await connection.execute('select * from tbl_users where id = ?', [idKTP])
    
    console.log('hallo apakah ini jalan??');
    console.log(`ini adalah hasil: ${hasil}`);
    
    return res.status(201).json({
      status: 201,
      message: 'success',
      data: hasil
    })
  } catch (error) {
    console.log(`ada kesalahan index.js/get(mobile.users/idKTP): ${error}`);
  }
})

app.delete('/mobile/users/:idKTP', async (req, res) => {
  try {
    const idKartuTandaPenduduk = req.params.idKTP

    const [result] = await connection.execute('delete from tbl_users where id = ?', [idKartuTandaPenduduk])

    if(result.affectedRows === 1){ //jika berhasil hapus
      // logic 2 yaitu ambil semua data users
      const [dataUser] = await connection.execute('select * from tbl_users')
       res.status(201).json({
        msg: 'delete berhasil',
        id: idKartuTandaPenduduk,
        data: dataUser
      })
      return
    } 

    return res.status(400).json({
      msg: 'delete gagal',
      id: idKartuTandaPenduduk
    })
    
  } catch (error) {
    console.log(error);
    
  }
})

app.post('/mobile/users', async (req, res) => {
  try {
    const name = req.body.name
    const email = req.body.email
    const address = req.body.address
    const password = req.body.password
    const images = req.body.images

    const [result] = await connection.execute("insert into tbl_users (name, email, password, address, images) values (?, ?, ?, ?, ?)", [name, email, password, address , images])

    return res.status(201).json({
      msg: 'insert berhasil',
      id: result.insertId
    })
  } catch (error) {
    console.log(error);
    
  }
})


app.post('/mobile/post', async (req, res) => {
  try {
    const { judul, idpenulis } = req.body

    const [result] = await connection.execute('insert into tbl_post (judul_post, id_penulis) values (?, ?)', [judul, idpenulis])
    return res.status(201).json({
      msg: 'post berhasil', 
    })
  } catch (error) {
    console.log(error);
    
  }
})

app.get('/mobile/post', 
  
  (req, res, next) => {
    const sesuatu = req.headers['authorization']

    if(sesuatu == "A") {
      next()
      return
    }
    
    return res.status(401).json({
      msg: 'anda tidak memiliki akses'
    })
  } , 

async (req, res) => {
  try {
    // ambil data user dan post
    const [result] = await connection.execute("select tbl_users.name, tbl_post.judul_post, tbl_post.tanggal_update from tbl_post JOIN tbl_users ON tbl_post.id_penulis = tbl_users.id")

    // return
    return res.status(201).json({
      msg: 'post berhasil', 
      data: result
    })
  } catch (error) {
    console.log(error);
    
  }
})

// jalankan server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});