import { combineReducers, createStore, applyMiddleware } from "redux";
import { Pictures } from './picture';
import { Basket } from "./basket";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        pictures: Pictures,
        basket: Basket
        }),
        applyMiddleware(thunk, logger)
    );   
    return store;
}