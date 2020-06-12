import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./components/Test";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
    <ReduxProvider store={store}>
        <Router>
            <React.StrictMode><Test /></React.StrictMode>
        </Router>
    </ReduxProvider>,
    document.getElementById("app")
);
