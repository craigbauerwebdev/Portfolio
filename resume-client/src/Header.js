import React from "react";
import Icons from "./ui-components/Icons";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <header>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <img
            alt="CB Logo"
            height="100"
            src={`${process.env.PUBLIC_URL}/assets/CB-logo.png`}
          />
        </Link>
        <Icons showButtons={true} />
      </header>
      <hr />
    </div>
  );
};
export default Header;
