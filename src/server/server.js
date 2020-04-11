const path = require("path");
const express = require("express");

const server = express();
const port = process.env.PORT || 3000;

// Serve public directory
server.use(express.static(path.join(
  __dirname,
  "..",
  "..",
  "public"
)));

server.listen(
  port,
  () => console.log(`Reservation app is up on port: ${port}`)
);
