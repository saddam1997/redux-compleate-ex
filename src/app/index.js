import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux"
import App from "./container/App";

import store from "./store"

console.log("React.versionReact.versionReact.version ", React.version);



render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);