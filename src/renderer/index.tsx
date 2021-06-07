import { DefaultButton } from "@fluentui/react";
import * as React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import Login from "../screens/login/Login";

import MainScreen from "../screens/MainScreen";

import "./root.css";

const Root: React.FC = () => {
  return (
    <div className="root">
      <Login />
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("app"));
