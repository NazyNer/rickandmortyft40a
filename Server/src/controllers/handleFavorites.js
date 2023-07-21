let myFavorites = [];

function postFav(req, res) {
  console.log(req.body)
  myFavorites.push(req.body)
  return res.json(myFavorites)

}
function deleteFav(req, res) {
  const { id } = req.params;
  const noDelete = myFavorites.filter(fav => fav.id !== Number(id));
  myFavorites = noDelete;
  return res.json(myFavorites);
}

function getFav(req, res) {
  console.log("llega?")
  return res.json(myFavorites);
}


module.exports = {
  postFav,
  deleteFav,
  getFav,
};