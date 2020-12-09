const express = require("express");
const server = express();
const carsRouter = require("./cars/cars-router");

server.use(express.json());

server.use("/api/cars", carsRouter);

server.get("/", (_, res) => {
  res.status(200).json({ message: "server running" });
});

module.exports = server;
