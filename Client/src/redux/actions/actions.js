import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER, RESET } from "./types.js"

export function addFavorite(obj) {
  return {type: ADDFAVORITE, payload: obj}
}
export function deleteFavorite(id) {
  return {type: DELETEFAVORITE, payload: id}
}
export function filterCards(gender){
  return {type: FILTER, payload: gender}
}
export function orderCards(order){
  return {type: ORDER, payload: order}
}
export function reset(){
  return {type: RESET}
}