import React, { Component } from "react";

import {
  DefaultButton,
  Facepile,
  IFacepilePersona,
  initializeIcons,
  personaSize,
  PrimaryButton,
} from "@fluentui/react/lib";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { PersonaSize, PersonaPresence } from "@fluentui/react/lib/Persona";
import { setIconOptions } from "@fluentui/react/lib/Styling";

import "./ActionBar-style.css";

import Menu from "@material-ui/icons/Menu";
import User from "@material-ui/icons/Person";

const ActionBar = () => {
  const person: IFacepilePersona = {
    imageUrl: "../../../assets/accounts/20210507_151304-1-1-01.jpeg",
    personaName: "Tharinda",
  };

  return (
    <div className="mainScreen__actionBar">
      <div className="mainScreen__actionBar__left">
        <ul>
          <li>
            <Menu />
          </li>
          <li>
            <PrimaryButton text="New Mail" />
          </li>
        </ul>
      </div>
      <div className="center">
        <SearchBox
          placeholder="Search"
          onSearch={(newValue: string) => console.log("value is " + newValue)}
        />
      </div>
      <div className="right">
        <Facepile personaSize={PersonaSize.size32} personas={[person]} />
      </div>
    </div>
  );
};

export default ActionBar;
