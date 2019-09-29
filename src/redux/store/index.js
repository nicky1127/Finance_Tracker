import { createStore, applyMiddleware, compose } from 'redux';
import recordReducer from '../reducers/recordReucer';

const storeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    recordReducer
    ,
    storeEnhancers(applyMiddleware())
);

export default store;