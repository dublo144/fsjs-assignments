const moduleFn = require("../../../period_01/02_Getting-started-with-node/learnyounode/06_mymodule");
const expect = require("chai").expect;
const fs = require("fs-extra");
const path = require("path");

describe("File Finder Test", () => {
  before(() => {
    fs.mkdirSync("./test/tmp/testfolder", { recursive: true });
    fs.writeFileSync("./test/tmp/testfolder/test1.js", "Delete me");
    fs.writeFileSync("./test/tmp/testfolder/test2.js", "Delete me");
  });

  after(() => {
    fs.removeSync("./test/tmp");
  });

  it("finds content of the lib folder", (done) => {
    const dir = path.join(__dirname, "tmp", "testfolder");
    moduleFn(dir, "js", (err, list) => {
      expect(list).to.deep.equal(["test1.js", "test2.js"]);
      done();
    });
  });
});
