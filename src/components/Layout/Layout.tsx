import React, { ReactElement } from "react";
import "./Layout.css"

interface LayoutProps {
  children: ReactElement<any, any>;
}

const layout: React.SFC<LayoutProps> = props => {
  return (
    <React.Fragment>
      <div>Toolbar Sidedrawer Backdrop</div>
      <main className="content">{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
