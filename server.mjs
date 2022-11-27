// const express = require('express')
console.log("i am server file");
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.get("/abc", (req, res) => {
  console.log("request ip:", req.ip);
  res.send("Hello World" + new Date().toDateString());
});

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))

app.use('/*', express.static(path.join(__dirname, './web/build')))

// app.use("/", express.static(path.join(__dirname, "./web/build/index.html")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
