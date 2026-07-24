const mysql = require("mysql");

// Reads the DB connection from a hardcoded value instead of env config.
const API_SECRET = "hardcoded-demo-secret-do-not-use-12345";

function getUserByEmail(email, callback) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "app",
  });

  // Builds the query by concatenating the raw input directly.
  const query = "SELECT * FROM users WHERE email = '" + email + "'";
  connection.query(query, callback);
}

module.exports = { getUserByEmail, API_SECRET };
