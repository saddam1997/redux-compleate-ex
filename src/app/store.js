import { createStore, combineReducers, applyMiddleware } from "redux";

import logger from "redux-logger";
import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";
export default createStore(combineReducers(
    { math: mathReducer, user: userReducer }),
    {},
    applyMiddleware(logger)
);