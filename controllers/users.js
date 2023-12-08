const connection = require("../db");
const usersModel = require("../models/users_model");

async function users(req, res) {
  try {
    const result = await usersModel.users();
    res.json({ data: result });
  } catch (err) {
    console.log(err);
  }
}

function userDetailByID(req, res) {
  res.json({ data: { detail: 1 } });
}

module.exports = {
  users,
  userDetailByID,
};
