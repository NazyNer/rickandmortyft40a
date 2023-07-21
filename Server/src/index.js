const http = require("http");
require("dotenv").config();
const { PORT, PASSWORD } = process.env;
const { getCharById } = require("./controllers/getCharById.js");

http.createServer((req, res)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  if (req.url.includes("onSearch")) {
    const id = req.url.split("/").at(-1);
    return getCharById(res, id);
  }
  if (req.url.includes("detail")) {
    const id = req.url.split("/").at(-1);
  }
}).listen(PORT, () => {

})