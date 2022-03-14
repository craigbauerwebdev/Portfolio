import React from "react";
import navData from "../StaticData/navData";
// eslint-disable-next-line
import { BrowserRouter as Switch, Link } from "react-router-dom";
import Social from "../ui-components/Social";

const Sidebar = (settings) => {
  return (
    <div className="main-side-bar">
      <img
        className="sidebar-logo"
        alt="sidebar logo"
        src="assets/cb-sidebar-logo.jpg"
      />
      {navData.map((item) => {
        return (
          <Link className="link-item" to={item.url}>
            {item.label}
          </Link>
        );
      })}
      <Social
        github={settings.gitHub_url}
        linkedin={settings.linkedin_url}
        theme="light"
        height="24px"
      />
    </div>
  );
};
export default Sidebar;
