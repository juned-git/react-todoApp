import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AddARow, AddARowOnEnter } from "./Functions";
ReactDOM.render(
  <App inputFunction={AddARowOnEnter} buttonFunction={AddARow} />,
  document.getElementById("root")
);
