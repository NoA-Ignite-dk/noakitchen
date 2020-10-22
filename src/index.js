import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./fonts/AftenScreen-Regular.ttf";
import App from "./components/App";

require("dotenv").config();

ReactDOM.render(<App />, document.getElementById("root"));
