import React, { Component } from "react";

import mailX from "../../../assets/logo/mailX.svg";
import google from "../../../assets/accounts/google.svg";
import TopBar from "../../components/topBar/TopBar";

import "./login-style.css";

const Login = () => {
  return (
    <div className="login">
      <div>
        <TopBar />
      </div>

      <div className="login_content">
        <img className="logo" src={mailX} alt="" />
        <h4>Add your account</h4>
        <div className="login_content_accountCell">
          <img src={google} alt="" />
          <h5>Google</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
