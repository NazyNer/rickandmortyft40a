import { ADDFAVORITE, DELETEFAVORITE } from "../actions/types";

const initialState = {
  favorites: [],
  access: false,
}

export default function reducerOne(state = initialState, action) {
  switch(action.type){
    case ADDFAVORITE:
      return {...state, favorites: [...state.favorites, action.payload]};
    case DELETEFAVORITE:
      return {...state, favorites: state.favorites.filter(item => item.id !== action.payload)};
    default:
      return {...state};
  }
}