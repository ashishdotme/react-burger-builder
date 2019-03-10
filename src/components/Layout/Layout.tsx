import React, { ReactElement } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

interface LayoutProps {
  children: ReactElement<any, any>;
}

const layout: React.SFC<LayoutProps> = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className="content">{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
