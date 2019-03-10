import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

interface SideDrawerProps {}
const SideDrawer: React.SFC<SideDrawerProps> = props => {
  return (
    <div className="SideDrawer">
      <div>Logo</div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
