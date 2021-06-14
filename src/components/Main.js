import React, { Component, useState } from "react";
import Row from "./Row";
import Filters from "./Filters";
import requests from "../request/requests";
import "./styles/Main.scss";

import {
  fetchLaunchYear,
  fetchLaunchSuccess,
  fetchLandSuccess,
} from "../shared/shared";
function Main() {
  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  const [launchyear, setLaunchYear] = useState("");
  const [valid, setValid] = useState("");
  const [landsuc, setLandSuc] = useState("");
  const [withoutfilter, setFilter] = useState("true");
  var filter = "";

  //IF ELSE STRUCTURE ALTERNATIVE

  /* if (launchyear) {
    if (valid) {
      if (landsuc) {
        filter =
          filter +
          fetchLaunchYear +
          launchyear +
          fetchLaunchSuccess +
          valid +
          fetchLandSuccess +
          landsuc;
      } else {
        filter =
          filter + fetchLaunchYear + launchyear + fetchLaunchSuccess + valid;
      }
    } else {
      filter = filter + fetchLaunchYear + launchyear;
    }
  } else if (valid) {
    if (landsuc) {
      filter = filter + fetchLaunchSuccess + valid + fetchLandSuccess + landsuc;
    } else {
      filter = filter + fetchLaunchSuccess + valid;
    }
  } else {
    filter = fetchLandSuccess + landsuc;
  }*/

  filter =
    filter +
    (launchyear
      ? valid
        ? landsuc
          ? fetchLaunchYear +
            launchyear +
            fetchLaunchSuccess +
            valid +
            fetchLandSuccess +
            landsuc
          : fetchLaunchYear + launchyear + fetchLaunchSuccess + valid
        : fetchLaunchYear + launchyear
      : valid
      ? landsuc
        ? fetchLaunchSuccess + valid + fetchLandSuccess + landsuc
        : fetchLaunchSuccess + valid
      : fetchLandSuccess + landsuc);

  console.log(filter);

  return (
    <div>
      <div className="header">
        <h1>SpaceX Launch Programs</h1>
      </div>
      <div className="home">
        <div className="filters">
          <Filters
            years={years}
            setLaunchYear={setLaunchYear}
            setValid={setValid}
            requests={requests}
            setLandSuc={setLandSuc}
            setFilter={setFilter}
          />
        </div>

        <div className="sat-row">
          <Row
            className="sat-row"
            fetchUrl={withoutfilter ? " " : filter}
            requests={requests}
          />
        </div>
      </div>
      <div className="footer-container">
        <h1 className="footer-header">
          <strong>Developed By : </strong> Samyak K. Shah
        </h1>
      </div>
    </div>
  );
}

export default Main;
