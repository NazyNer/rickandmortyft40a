import {createStore} from 'redux';
import reducerOne from './reducers/index';

const store = createStore(reducerOne);

export default store;