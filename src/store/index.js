import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import gameMiddleware from 'src/middlewares/gameMiddleware';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    gameMiddleware,
  ),
);
const store = createStore(reducer, enhancers);

export default store;
