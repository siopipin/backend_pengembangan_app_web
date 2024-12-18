const connection = require("../db");

async function users() {
  const [result] = await connection.execute("select * from tbl_users");
  return result;
}

async function usersDetailByID(id, nama) {
  try {
    console.log(nama);
    
    const [result] = await connection.execute(
      "select * from tbl_users where id =?",
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  users,
  usersDetailByID
};
