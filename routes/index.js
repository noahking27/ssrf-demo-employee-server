const express = require("express");
const router = express.Router();
const fs = require('fs')

router.get("/", (req, res) => {
  res.send("Contoso Retirement Backend");
});

router.get("/employees", (req, res) => {
  fs.readFile("./employees.csv", (err, data) => {
    if (err) {
      res.json(err);
    }
    res.send(data);
  });
});

module.exports = router;