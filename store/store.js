import {createStore} from 'redux';
import { mainReducer } from './reducers/CounterReducers';

export const store = createStore(mainReducer);