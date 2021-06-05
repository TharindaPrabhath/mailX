import { DefaultButton } from "@fluentui/react";
import React, { Component } from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBar_titleBar">
        <h6>MailX</h6>
      </div>
      <div className="topBar_sysTrayBtns">
        <button className="topBar_sysTrayBtns_close" />
        <button className="topBar_sysTrayBtns_minimize" />
        <button className="topBar_sysTrayBtns_maxOrRestoreDown" />
      </div>
    </div>
  );
};

export default TopBar;
