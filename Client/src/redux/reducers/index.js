import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER, RESET } from "../actions/types";

const initialState = {
  favorites: [],
  allCharacters: [],
  access: false,
}

export default function reducerOne(state = initialState, action) {
  switch(action.type){
    case ADDFAVORITE:
      let copy = [...state.allCharacters, action.payload];
      return {...state, favorites: copy, allCharacters: [...copy]};
    case DELETEFAVORITE:
      return {...state, favorites: state.favorites.filter(item => item.id !== action.payload), allCharacters: state.allCharacters.filter(item => item.id !== action.payload)};
    case FILTER:
      return {...state, favorites: state.allCharacters.filter((pj) => pj.gender === action.payload),};
    case ORDER: 
      let copyOrder = state.favorites.sort((a, b)=>{
        if (action.payload === "A"){
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        }else{
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
          return 0;
        }
      });
      return {
        ...state,
        favoirites: copyOrder,
      };
      case RESET:
        return {...state, favorites: state.allCharacters}
      default:
      return {...state};
  }
}