const fs = require("fs");
const file = process.argv[2];

fs.readFile(file, (err, result) => {
  if (err) console.log(err);
  const newLines = result.toString().split("\n").length - 1;
  console.log(newLines);
});
