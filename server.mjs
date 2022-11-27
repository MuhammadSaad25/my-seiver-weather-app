// const express = require('express')
console.log("i am server file");
import express from "express";
import path from "path";
import cors from "cors";
// import apiData from "./data.json"


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/abc", (req, res) => {
  console.log("request ip:", req.ip);
  res.send("Hello World" + new Date().toDateString());
});

app.get("/data", (req, res) => {
  // console.log("request ip:", req.ip);
  res.send({
    temp:30,
    wind:40
  });
});

const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./web/build")));

app.use("*", express.static(path.join(__dirname, "./web/build")));

// app.use("/", express.static(path.join(__dirname, "./web/build/index.html")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
