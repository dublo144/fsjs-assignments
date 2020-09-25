const fs = require("fs");

const path = process.argv[2];
const filter = process.argv[3];

fs.readdir(path, (err, list) => {
  if (err) console.log(err);
  list.forEach((file) => {
    file.split(".")[1] === filter && console.log(file);
  });
});
