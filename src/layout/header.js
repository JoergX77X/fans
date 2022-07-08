
import classes from "./header.module.css";
import React from "react";
//import { NavItem, NavLink, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";


const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href="/">
          <img src="/images/deinefans_logo_2.png" alt="Logo" />
        </a>
      </div>
      <h5>
        <a href="/models">Models</a>
       
      </h5>
      <h5>
        
        <a href="/privacy">Datenschutz</a>
      </h5>
      <h5>
        <a href="/agb">AGB</a>
       
      </h5>
    </header>
  );
};

export default Header;
