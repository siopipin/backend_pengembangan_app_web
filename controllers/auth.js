const usersModel = require("../models/users_model");
const jwt = require("jsonwebtoken");
async function login(req, res) {
  try {
    const { id, password, nama} = req.body;
    const idUser = req.body.id;
    const namaUser = req.body.nama;
    console.log(namaUser);
    
    
    const result = await usersModel.usersDetailByID(id, nama);
    if (result.length <= 0) {
      res.json({
        message: "Login failed",
      });
      return;
    }

    const token = jwt.sign(
      { id: result[0].id, name: result[0].name },
      "sio12345",
      { expiresIn: "2 days" }
    );

    res.json({
      message: "Login success",
      id: result[0].id,
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
}

async function userDetailByID(req, res) {
  const { id } = req.params;
  const result = await usersModel.usersDetailByID(id);
  if(result.length <= 0) {
    res.json({
      message: "User not found",
    });
    return;
  }
  res.json({
    message: "User found",
    data: result[0],
  });
}

module.exports = {
    login,
    userDetailByID
}
