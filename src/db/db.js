const mysql = require("mysql");

//creating connection to mysqlDB.
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "todos"
});

//connectiong to the db.
connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

module.exports = connection;
