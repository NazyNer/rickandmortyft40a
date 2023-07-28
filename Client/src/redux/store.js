import { createStore, applyMiddleware } from "redux";
// composeWithDevtools(applyMiddleware(thunk)) > para configurar la extension de chrome de REDUX despues de instalar devtools-extension
import reducerOne from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducerOne, composeWithDevTools(applyMiddleware(thunk)));

export default store;
