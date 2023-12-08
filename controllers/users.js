const connection = require('../db')
const usersModel = require('../models/users_model')

async function users(req, res) {
    const result = await usersModel.users()

    res.json({data: result})
}

function userDetailByID(req, res) {
    res.json({data: {detail: 1}})
} 

module.exports = {
    users,
    userDetailByID
}