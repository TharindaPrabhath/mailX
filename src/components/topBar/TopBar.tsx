import { DefaultButton, Image } from "@fluentui/react";
import React, { Component } from "react";

import mailX from "../../../assets/logo/mailX.svg";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBar_titleBar">
        <img src={mailX} alt="" height="16" />
        <h6>MailX</h6>
      </div>

      <div className="topBar_sysTrayBtns">
        <button className="topBar_sysTrayBtns_minimize" />
        <button className="topBar_sysTrayBtns_maxOrRestoreDown" />
        <button className="topBar_sysTrayBtns_close" />
      </div>
    </div>
  );
};

export default TopBar;
