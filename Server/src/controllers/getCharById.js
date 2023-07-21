const axios = require('axios');
// const dotenv = require('dotenv');
// dotenv.config();
// const { API_URL } = process.env;

const API_URL = "https://rickandmortyapi.com/api/character/"

function getCharById(res, id) {
  axios(API_URL+id).then(response => {
    const { data} = response;
    const character = {
      id: id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    }
    res.writeHead(200, { "Content-type": 'application/json' })
    return res.end(JSON.stringify(character));
  }
  ).catch(error => {
    res.writeHead(500, {"Content-type": "text/plain"})
    return res.end(error.message);
  });
}

function getDetail(res, id){
  axios(API_URL+id).then(response => {
    const { data} = response;
    const character = {
      id: id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
      location: data.location,
    }
    res.writeHead(200, { "Content-type": 'application/json' })
    return res.end(JSON.stringify(character));
  }
  ).catch(error => {
    res.writeHead(500, {"Content-type": "text/plain"})
    return res.end(error.message);
  });
}


module.exports = {
  getCharById,
  getDetail,
};