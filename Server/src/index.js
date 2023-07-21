const http = require("http");
require("dotenv").config();
const { PORT, PASSWORD } = process.env;
const { getCharById, getDetail } = require("./controllers/getCharById.js");

http.createServer((req, res)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  const id = req.url.split("/").at(-1);
  if (req.url.includes("onSearch")) {
    return getCharById(res, id);
  }
  if (req.url.includes("detail")) {
    return getDetail(res, id);
  }
}).listen(PORT, () => {

})