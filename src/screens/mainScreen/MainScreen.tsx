import {
  DefaultButton,
  initializeIcons,
  PrimaryButton,
} from "@fluentui/react/lib";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import * as React from "react";
import TopBar from "../../components/topBar/TopBar";

import "./mainScreen-style.css";

import { setIconOptions } from "@fluentui/react/lib/Styling";

import Menu from "@material-ui/icons/Menu";
import User from "@material-ui/icons/Person";

// Suppress icon warnings.
setIconOptions({
  disableWarnings: true,
});
// To avoid the issue of not showing icons in the
// fluent ui controllers
initializeIcons();

const MainScreen = () => {
  return (
    <div className="mainScreen">
      <div>
        <TopBar />
      </div>

      <div className="actionBar">
        <Menu />
        <PrimaryButton text="New Mail" />
        <SearchBox
          placeholder="Search"
          onSearch={(newValue: string) => console.log("value is " + newValue)}
        />
        <User />
      </div>
    </div>
  );
};

export default MainScreen;
