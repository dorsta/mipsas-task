import React, { useContext } from "react";

import classes from "./switchButton.module.css";
import { SortingOrderContext } from "../../../../context/context";

const SwitchButton = (props) => {
  let { isNewFirst, setIsNewFirst } = useContext(SortingOrderContext);
  let toggleClasses = [classes.switch];
  if (!isNewFirst) {
    toggleClasses.push(classes.oldFirst);
    toggleClasses = toggleClasses.join(" ");
  }
  return (
    <div className={classes.switchWithText}>
      <label>New First</label>
      <div onClick={setIsNewFirst} className={toggleClasses}>
        <div className={classes.movingPart}></div>
      </div>
      <label>Old First</label>
    </div>
  );
};

export default SwitchButton;
