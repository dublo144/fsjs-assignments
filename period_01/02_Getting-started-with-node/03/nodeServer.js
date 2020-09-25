const http = require("http");
const osInfo = require("../01/osInfo");
const dosDetector = require("../02/dosDetector");

const detector = new dosDetector(5000);

const server = http.createServer((req, res) => {
  detector.addUrl(req.url);

  if (req.url === "/api/os-info") {
    res.setHeader("Content-Type", "application/json");
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(osInfo));
    return res.end();
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log("listening on 3000");
//Register for the "DosDetected" event and console.log the url and time info.

detector.on("DosDetected", () => {
  console.log("Potential DDOS");
});
