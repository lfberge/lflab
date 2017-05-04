import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/reducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(
  reducer, composeWithDevTools(
  applyMiddleware(
    thunkMiddleware
  )
));

export default store;