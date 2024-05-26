const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/product", (req, res) => {
  db.query(sqlQuery, (err, result) => {
       
  })
});

app.post("/product", (req, res) => {
  res.send("post success!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
