const connection = require('../db')

async function users() {
    const [result] = await connection.execute('select * from tbl_users');
    return result;
}

module.exports = {
    users,
}