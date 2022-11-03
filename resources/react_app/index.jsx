import "./bootstrap";

import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

if (document.getElementById("app")) {
    ReactDom.render(<App />, document.getElementById("app"));
}
