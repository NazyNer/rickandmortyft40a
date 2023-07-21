const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(req, res) {
  const { id } = req.params;

  axios(`${URL}${id}`).then(({ data }) => {
    if (data.error) {
      return res.status(404).send(data.error);
    }
    const { name, gender, species, origin, image, status, id } = data;
    const character = {
            id: Number(id),
            name: name,
            gender: gender,
            species: species,
            origin: origin,
            image: image,
            status: status,
          };
    console.log(character);
    return res.status(200).json(character);
  }).catch((axiosError) => {
    return res.status(500).send(axiosError.message);

  });
  
}

module.exports = {
  getCharById,
};