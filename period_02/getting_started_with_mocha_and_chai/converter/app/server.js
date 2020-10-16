const express = require("express");
const converter = require("./converter");

const app = express();

app.get("/rgbToHex", (req, res) => {
  const red = parseInt(req.query.red, 10);
  const green = parseInt(req.query.green, 10);
  const blue = parseInt(req.query.blue, 10);
  const hex = converter.rgbToHex(red, green, blue);
  res.send(hex);
});

app.get("/hexToRgb", (req, res) => {
  const hex = req.query.hex;
  const rgb = converter.hexToRgb(hex);
  res.send(JSON.stringify(rgb));
});

app.listen(3000);
