import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";

import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div>
      <header className="Toolbar">
        <div>MENU</div>
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
};

export default Toolbar;
