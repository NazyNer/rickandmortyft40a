import { ADDFAVORITE, DELETEFAVORITE } from "./types.js"

export function addFavorite(obj) {
  return {type: ADDFAVORITE, payload: obj}
}
export function deleteFavorite(id) {
  return {type: DELETEFAVORITE, payload: id}

}