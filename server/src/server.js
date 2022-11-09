"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const getData = require("./middleware/getData");
const { MONGO_URI, PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));
// app.use(router);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Successfully listening on ${PORT}`);
    app.listen(PORT);
  })
  .then(() => {
    getData();
  })
  .catch((err) => {
    console.log(err);
  });
