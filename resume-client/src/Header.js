import React, { useContext } from "react";
//import Button from './ui-components/Button';
import Icons from "./ui-components/Icons";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth/Auth";
//import Logo from 'process.env.PUBLIC_URL + 'assets/CB-logo.png';

const Header = (props) => {
  //render() {
  const { currentUser } = useContext(AuthContext);
  //console.log(currentUser);
  return (
    <div className="header">
      <header className="header">
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <img
            alt="CB Logo"
            height="100"
            src={`${process.env.PUBLIC_URL}/assets/CB-logo.png`}
          />
        </Link>
        <Link to="/login">
          <div className="settings-icon">
            <i className="large material-icons">settings</i>
            {currentUser && <span className="welcome">Signed In</span>}
          </div>
        </Link>
        <Icons showButtons={true} />
      </header>
    </div>
  );
  //}
};
export default Header;
