const express = require('express');
const favoriteRouter = express.Router();
const {postFav, deleteFav, getFav} = require('../controllers/handleFavorites')
//favoritos
console.log('favoritos')
favoriteRouter.get('/', getFav)
favoriteRouter.post('/', postFav)
favoriteRouter.delete('/:id', deleteFav)

module.exports = favoriteRouter;