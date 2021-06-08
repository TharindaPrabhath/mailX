import * as React from "react";

import { setIconOptions } from "@fluentui/react/lib/Styling";
import { initializeIcons } from "@fluentui/react";

import "./mainScreen-style.css";

import TopBar from "../../components/topBar/TopBar";
import ActionBar from "../../components/actionBar/ActionBar";

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

      <ActionBar />
    </div>
  );
};

export default MainScreen;
