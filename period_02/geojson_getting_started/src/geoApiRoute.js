const express = require("express");
const gju = require("geojson-utils");
const { players, gameArea } = require("./gameData");

const router = express.Router();

router.get("/isuserinarea/:lon/:lat", (req, res, next) => {
  const point = convertToPoint(req.params.lon, req.params.lat);
  const status = gju.pointInPolygon(point, gameArea.geometry);
  const msg = status
    ? "Point was inside the tested polygon"
    : "Point was NOT inside tested polygon";
  return res.json({ status, msg });
});

router.get("/findNearbyPlayers/:lon/:lat/:rad", (req, res, next) => {
  const player = convertToPoint(req.params.lon, req.params.lat);
  // Nearby Players
  const nearbyPlayers = [];

  for (var i in players) {
    if (gju.geometryWithinRadius(players[i].geometry, player, req.params.rad)) {
      nearbyPlayers.push(players[i]);
    }
  }

  return res.json(nearbyPlayers);
});

router.get("/distanceToUser/:lon/:lat/:username", (req, res, next) => {
  // Distance between to user.
  const player = convertToPoint(req.params.lon, req.params.lat);
  const target = players.find((p) => p.properties.name == req.params.username);
  if (!target) {
    res.status(404);
    return res.json({ msg: "User not found" });
  }
  const distance = gju.pointDistance(player, target.geometry);
  return res.json(distance);
});

const convertToPoint = (lon, lat) => {
  return { type: "Point", coordinates: [lon, lat] };
};

module.exports = router;
