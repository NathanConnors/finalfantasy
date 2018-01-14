class Main {
  constructor () {
    let mysql = require('mysql');

    let connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "tracking"
    });

    connection.connect(function(err) {
      if(!err) {
        console.log("Database connection successful");
      }
      else {
        console.log("Error connecting to database");
      }
    });

    connection.query('SELECT * FROM user',
    function(err, rows, fields) {
      if(!err)
        console.log(rows);
      else
        console.log('Error while performing Query');
    });
  }
}
