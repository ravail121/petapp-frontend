import { createStore } from 'redux';
import reducerAdd from '../Redux/Reducers/index';

const store = createStore(reducerAdd);

export default store;