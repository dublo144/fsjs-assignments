const express = require("express");
const geoApiRouter = require("./geoApiRoute");

const app = express();

app.use("/geoapi", geoApiRouter);

app.get("/", (req, res) => res.send("Geo Demo!"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
