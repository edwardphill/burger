var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: ""
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: ");
    return;
  }
  console.log("connected as id ");
});

module.exports = connection;
