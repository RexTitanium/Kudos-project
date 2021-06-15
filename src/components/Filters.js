import React, { useState } from "react";
import "./styles/filter.scss";

function Filters({ years, setLandSuc, setValid, setLaunchYear, setFilter }) {
  const [activeButton, setActive] = useState("");
  const [lsButton, setLsActive] = useState("");
  const [lfButton, setLfActive] = useState("");
  const clearAll = (e) => {
    setLaunchYear("");
    setValid("");
    setLandSuc("");
    setActive("");
    setLsActive("");
    setLfActive("");
  };

  const checkLaunchYear = (e) => {
    setLaunchYear(e.target.value);
    setActive(e.target.value);
  };

  const checkLaunchSuccess = (e) => {
    setValid(e.target.value);
    setLsActive(e.target.value);
  };

  const checkLandSuccess = (e) => {
    setLandSuc(e.target.value);
    setLfActive(e.target.value);
  };
  const ly = years.map((year, i) => {
    return (
      <div key={i + 1} className="years">
        <input
          className="buttons"
          type="radio"
          name="LaunchYear"
          id={year}
          value={year}
          onClick={checkLaunchYear}
        />
        <label
          className={`btn ${activeButton === year ? "active" : ""}`}
          htmlFor={year}
        >
          {year}
        </label>
      </div>
    );
  });

  return (
    <div className="filter_container">
      <h1>Filters</h1>
      <div name="LaunchYear" className="LaunchYear">
        <h1>Launch Year</h1>
        <div className="col-12 year_container">{ly}</div>
      </div>
      <div className="LaunchSuccess">
        <h1>Launch Success</h1>
        <div name="launch_success" className="launch_success">
          <div>
            <input
              className="buttons"
              name="launch_success"
              type="radio"
              id="launch-t"
              value="true"
              onClick={checkLaunchSuccess}
            />
            <label
              className={`btn ${lsButton === "true" ? "active" : ""}`}
              htmlFor="launch-t"
            >
              True
            </label>
          </div>
          <div>
            <input
              className="buttons"
              name="launch_success"
              type="radio"
              id="launch-f"
              value="false"
              onClick={checkLaunchSuccess}
            />
            <label
              className={`btn ${lsButton === "false" ? "active" : ""}`}
              htmlFor="launch-f"
            >
              False
            </label>
          </div>
        </div>
      </div>
      <div className="LandSuccess">
        <h1>Land Success</h1>
        <div className="land_success">
          <div>
            <input
              className="buttons"
              name="launch_success"
              type="radio"
              id="land-t"
              value="true"
              onClick={checkLandSuccess}
            />
            <label
              className={`btn ${lfButton === "true" ? "active" : ""}`}
              htmlFor="land-t"
            >
              True
            </label>
          </div>
          <div>
            <input
              className="buttons"
              name="launch_success"
              type="radio"
              id="land-f"
              value="false"
              onClick={checkLandSuccess}
            />
            <label
              className={`btn ${lfButton === "false" ? "active" : ""}`}
              htmlFor="land-f"
            >
              False
            </label>
          </div>
        </div>
      </div>

      <div className="clear_wrapper">
        <button className="clear" onClick={clearAll}>
          Clear all filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
