import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import StudyCard from "./StudyCard/StudyCard";
import Loader from "../loader/loader";
import classes from "./studies.module.css";
import { SortingOrderContext } from "../../context/context";

const Studies = (props) => {
  let { location } = props;
  let [studyData, setStudyData] = useState({ loading: true });
  let { isNewFirst } = useContext(SortingOrderContext);

  const sortByUpdateDate = (array, isNewFirst) => {
    let sortedArray = array.sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
    if (!isNewFirst) {
      sortedArray.reverse();
    }
    return sortedArray;
  };

  const filterByStatus = (array, statusType) => {
    switch (statusType) {
      case "current":
        statusType = "draft";
        break;
      case "submitted":
        statusType = "pending";
        break;
      case "finished":
        break;
      default:
        return array;
    }
    return array.filter((element) => {
      return element.statusKey === statusType;
    });
  };

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/dorsta/fake-server/db")
      .then((res) => {
        const filteredArray = filterByStatus(
          res.data.data,
          location.pathname.substring(1).toLowerCase()
        );
        const sortedArray = sortByUpdateDate(filteredArray, isNewFirst);
        setStudyData({
          meta: res.data.meta,
          data: sortedArray,
          loading: false,
        });
      })
      .catch((err) => console.log(err.message));
  }, [location, isNewFirst]);

  let studyCards = <Loader />;
  if (!studyData.loading) {
    studyCards = studyData.data.map((element) => (
      <StudyCard
        key={element.id}
        name={element.name}
        imagesCount={element.imagesCount}
        status={element.statusKey}
        thumbnail={element.studyThumbnail}
        createdAt={element.createdAt}
        updatedAt={element.updatedAt}
      />
    ));
  }

  return <div className={classes.cardLayout}>{studyCards}</div>;
};

export default Studies;
