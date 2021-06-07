import * as React from "react";
import { Component } from "react";
import TopBar from "../../components/topBar/TopBar";

import "./mainScreen-style.css";

const MainScreen = () => {
  return (
    <div className="mainScreen">
      <div>
        <TopBar />
      </div>

      <div className="actionBar">
        <button>hello</button>
      </div>
    </div>
  );
};

export default MainScreen;
