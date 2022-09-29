import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import gameMiddleware from 'src/middlewares/gameMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    gameMiddleware,
    userMiddleware,
  ),
);
const store = createStore(reducer, enhancers);

export default store;
