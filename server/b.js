var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Arjun@123",
  database: "Lord_Vishnu"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE Bhagavatgita";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});