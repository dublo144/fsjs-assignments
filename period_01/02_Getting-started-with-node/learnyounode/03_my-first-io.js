const fs = require("fs");

const newLines = fs.readFileSync(process.argv[2]).toString().split("\n");

console.log(newLines.length - 1);
