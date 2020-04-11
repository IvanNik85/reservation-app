import "core-js/stable"; // async/await polyfill
import "regenerator-runtime/runtime"; // async/await polyfill
import React from "react";
import { render } from "react-dom";
import "normalize-css/normalize.css";
import "./styles/styles.scss";

import AppStore from "./store/AppStore";

render(
  <AppStore />,
  document.getElementById("root")
);
