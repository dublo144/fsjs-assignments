const moduleFn = require("./06_mymodule");

const dir = process.argv[2];
const extension = process.argv[3];

moduleFn(dir, extension, (err, list) => {
  if (err) return console.error(err);

  list.forEach((file) => {
    console.log(file);
  });
});
