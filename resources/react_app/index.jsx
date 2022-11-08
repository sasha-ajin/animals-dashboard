import "./bootstrap";

import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import axios from "axios";

const appConfig = document.getElementById("app");
const apiUrl = appConfig.getAttribute("data-api");
axios.defaults.baseURL = `${apiUrl}`;

if (document.getElementById("app")) {
    ReactDom.render(<App />, document.getElementById("app"));
}
