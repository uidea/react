import {createStore,applyMiddleware} from 'redux';
import exampleReducer from './reducers/exampleReducer';
import createSagaMiddleware from 'redux-saga'
import { exampleSaga } from "./sagas/exampleSaga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(exampleReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(exampleSaga)
export default store;