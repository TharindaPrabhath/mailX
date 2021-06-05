import { DefaultButton } from "@fluentui/react";
import * as React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";

import "./root.css";

const Root: React.FC = () => {
  return (
    <div className="root">
      <h1>Welcome to Electron with React and Typescript</h1>
      <DefaultButton text="Click me" />
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("app"));
