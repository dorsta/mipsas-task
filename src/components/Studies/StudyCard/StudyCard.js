import React from "react";

import classes from "./StudyCard.module.css";

const StudyCard = (props) => {
  const lastEditDate = new Date(props.updatedAt);
  let status = (
    <div
      className={[classes.status, classes.statusFinished].join(" ")}
      title="Finished"
    ></div>
  );
  if (props.status === "pending") {
    status = (
      <div
        className={[classes.status, classes.statusPending].join(" ")}
        title="Pending"
      ></div>
    );
  }
  if (props.status === "draft") {
    status = (
      <div
        className={[classes.status, classes.statusDraft].join(" ")}
        title="Draft"
      ></div>
    );
  }
  return (
    <div className={classes.card}>
      <img
        href={props.thumbnail}
        src={props.thumbnail}
        alt="study thumbnail"
        className={classes.cardImage}
      ></img>
      <div className={classes.cardContent}>
        <div
          className={[classes.cardContentHeading, classes.cardLine].join(" ")}
        >
          {props.name}
        </div>
        <div className={classes.statusDiv}>Status:{status}</div>
        <div className={classes.cardLine}>
          Images Count:&nbsp;{props.imagesCount}
        </div>
        <div className={classes.cardLine}>
          Last Eddited: {lastEditDate.toLocaleDateString("en-US")}
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
