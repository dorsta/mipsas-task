import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navigation.module.css";
import SwitchButton from "./switch/switchButton";

const navigation = (props) => {
  const navItems = props.items.map((item) => {
    return (
      <div key={item} className={classes.navItem}>
        <NavLink
          className={classes.NavLink}
          to={"/" + item}
          activeClassName={classes.active}
        >
          {item}
        </NavLink>
      </div>
    );
  });
  return (
    <nav className={classes.Navigation}>
      <div className={classes.navItems}>{navItems}</div>
      <SwitchButton />
    </nav>
  );
};

export default navigation;
