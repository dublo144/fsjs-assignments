const fs = require("fs");

module.exports = (dirName, extension, cb) => {
  fs.readdir(dirName, (err, list) => {
    if (err) return cb(err);

    list = list.filter((file) => {
      return file.split(".")[1] === extension;
    });

    cb(null, list);
  });
};
