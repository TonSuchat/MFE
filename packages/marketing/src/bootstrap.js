import React from "react";
import ReactDom from "react-dom";

import App from "./App";

export const mount = (el) => {
  console.log("hi there");
  ReactDom.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot);
}
