import { DefaultButton } from "@fluentui/react";
import * as React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";

import Login from "../screens/login/Login";
import MainScreen from "../screens/mainScreen/MainScreen";

import "./root.css";

const Root: React.FC = () => {
  return (
    <div className="root">
      <MainScreen />
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("app"));
