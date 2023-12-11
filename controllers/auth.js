const usersModel = require("../models/users_model");
const jwt = require("jsonwebtoken");
async function login(req, res) {
  try {
    const { id } = req.body; //seharusnya butuh password.
    
    const result = await usersModel.usersDetailByID(id);
    if (result.length <= 0) {
      res.json({
        message: "Login failed",
      });
      return;
    }

    const token = jwt.sign(
      { id: result[0].id, name: result[0].name },
      "secret",
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
