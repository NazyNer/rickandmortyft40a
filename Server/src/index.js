const http = require("http");
require("dotenv").config();
const { PORT, PASSWORD } = process.env;
const data = require("./utils/data.js");

http.createServer((req, res)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  if (req.url.includes("/rickandmorty/characters")) {
    const id = req.url.split("/").at(-1);
    const character = data.find((element) => element.id === Number(id));
    if (character) {
      return res.writeHead(200, {"Content-Type": "application/json"}.end(JSON.stringify({msg:"OK", character})));
    }else{
      return res.writeHead(200, {"Content-Type": "application/json"}.end(JSON.stringify({msg:"Not Found", error:`The character with the id ${id} was not found`})));
    }
  }
}).listen(PORT, () => {

})