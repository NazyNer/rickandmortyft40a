require("dotenv").config();
const { PORT, PASSWORD } = process.env;
const { getCharById, getDetail } = require("./controllers/getCharById.js");
const morgan = require("morgan");
const cors = require("cors");
//routers
const characterRouter = require("./routes/character.js");
const userRouter = require("./routes/user.js");
//express
const express = require('express');
const favoriteRouter = require("./routes/favorite.js");
const server = express();

//middleware
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());


server.use("/character", characterRouter);
server.use("/user", userRouter);
server.use("/favorites", (req, res) => {
  res.send(req.body);
})

server.get("/health-check", (req, res) => {
  res.send("Server is running");
});

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});