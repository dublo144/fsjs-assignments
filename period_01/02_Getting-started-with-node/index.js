// 1
// Create a javascript file that, using nodes CommonJS module system (require/exports), will export an object with the following info (demonstrated for a Window PC)
const osInfo = require("./01/osInfo");

// Create a simple test file that should import (require) the object and print it in a console.log-statement
console.log(osInfo.toSting());

//2
// Create a simple test file that should import the class, make an instance, and test the behaviour by adding the same URL more than once (use setTimeout to make the second call);\
const dosDetector = require("./02/dosDetector");

const detector = new dosDetector(5000);

detector.on("DosDetected", (args) => console.log(`Ddos url: ${args.url}`));

detector.addUrl("http://url1.com");

setTimeout(() => {
  detector.addUrl("http://url1.com");
}, 1000);

setTimeout(() => {
  detector.addUrl("http://url2.com");
}, 2000);
