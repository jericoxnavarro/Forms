const mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "unp_db",
};

const DB = mysql.createPool(dbConfig);

module.exports = (query) => {
  return new Promise((resolve, reject) => {
    DB.getConnection((err, connection) => {
      if (err) {
        console.log("Connection error: ", err);
        reject(err);
      } else {
        console.log("Connected");
        connection.query(query, (err, results) => {
          if (err) {
            console.log("Done Query");
            console.log(results);
            reject(err);
            console.log("Query error: ", err);
          } else {
            console.log(results);
            resolve(results);
          }
          connection.release();
        });
      }
    });
  });
};
