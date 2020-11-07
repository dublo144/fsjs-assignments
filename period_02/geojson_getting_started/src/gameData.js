module.exports = {
  gameArea: {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [12.51565933227539, 55.66357138588731],
          [12.51265525817871, 55.665290006104094],
          [12.508792877197266, 55.6637892433312],
          [12.50965118408203, 55.65938344598748],
          [12.514071464538574, 55.65756772586499],
          [12.51990795135498, 55.659213982339494],
          [12.521538734436035, 55.662942013126155],
          [12.51565933227539, 55.66357138588731],
        ],
      ],
    },
  },
  players: [
    {
      type: "Feature",
      properties: { name: "Peter" },
      geometry: {
        type: "Point",
        coordinates: [12.510724067687987, 55.66303884036356],
      },
    },
    {
      type: "Feature",
      properties: { name: "Jan" },
      geometry: {
        type: "Point",
        coordinates: [12.515144348144531, 55.663111460634404],
      },
    },
    {
      type: "Feature",
      properties: { name: "Per" },
      geometry: {
        type: "Point",
        coordinates: [12.517848014831543, 55.6596013267426],
      },
    },
    {
      type: "Feature",
      properties: { name: "Tobias" },
      geometry: {
        type: "Point",
        coordinates: [12.504887580871582, 55.6608359614475],
      },
    },
    {
      type: "Feature",
      properties: { name: "Hanne" },
      geometry: {
        type: "Point",
        coordinates: [12.517333030700684, 55.65730141316501],
      },
    },
  ],
};
