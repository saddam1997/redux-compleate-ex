import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux"
import App from "./components/App";

console.log("React.versionReact.versionReact.version ", React.version);


const mathReducer = (state = { result: 1, lastValues: [] }, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }

            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload
            }

            break;
    }
    return state;
}
const userReducer = (state = { userName: "Max", age: 27 }, action) => {


    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                userName: action.payload
            }

            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }

            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action :: ", action);
    next(action);
}
const store = createStore(combineReducers(
    { math: mathReducer, user: userReducer }),
    {},
    applyMiddleware(myLogger, logger)
);

store.subscribe(() => {
    //console.log("Store is update ");
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);