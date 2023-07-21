import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER, RESET } from "./types.js"
import axios from "axios";


// ACTION | addFav
export const addFavorite = (character) => {
  const endpoint = 'http://localhost:3001/favorite/';
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADDFAVORITE,
        payload: data,
      });
    });
  };
};
export const deleteFavorite = (id) => {
  const endpoint = 'http://localhost:3001/favorite/' + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETEFAVORITE,
        payload: data,
      });
    });
  };
};

export function filterCards(gender) {
  return { type: FILTER, payload: gender }
}
export function orderCards(order) {
  return { type: ORDER, payload: order }
}
export function reset() {
  return { type: RESET }
}
