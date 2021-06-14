import React, { useCallback, useState } from "react";
import "./styles/filter.scss";

function Filters({ years, setLandSuc, setValid, setLaunchYear, setFilter }) {
  const [activeButton, setActive] = useState("");
  const [lsButton, setLsActive] = useState("");
  const [lfButton, setLfActive] = useState("");
  const clearAll = (e) => {
    setLaunchYear("");
    setValid("");
    setLandSuc("");
    setFilter(true);
    setActive("");
    setLsActive("");
    setLfActive("");
  };

  const checkLaunchYear = useCallback(
    (e) => {
      setLaunchYear(e.target.value);
      setFilter(false);
      setActive(e.target.value);
    },
    [setLaunchYear]
  );

  const checkLaunchSuccess = useCallback(
    (e) => {
      setValid(e.target.value);
      setFilter(false);
      setLsActive(e.target.value);
    },
    [setValid]
  );

  const checkLandSuccess = useCallback(
    (e) => {
      setLandSuc(e.target.value);
      setFilter(false);
      setLfActive(e.target.value);
    },
    [setLandSuc]
  );
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
          className={`btn ${activeButton == year ? "active-color" : ""}`}
          htmlFor={year}
        >
          {year}
        </label>
      </div>
    );
  });

  return (
    <div className="filter-container">
      <h1>Filters</h1>
      <div name="LaunchYear" className="LaunchYear">
        <h1>Launch Year</h1>
        <div className="col-12 year-container">{ly}</div>
      </div>
      <div className="LaunchSuccess">
        <h1>Launch Success</h1>
        <div name="launch_success" className="launch-success">
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
              className={`btn ${lsButton == "true" ? "active-color" : ""}`}
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
              className={`btn ${lsButton == "false" ? "active-color" : ""}`}
              htmlFor="launch-f"
            >
              False
            </label>
          </div>
        </div>
      </div>
      <div className="LandSuccess">
        <h1>Land Success</h1>
        <div className="land-success">
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
              className={`btn ${lfButton == "true" ? "active-color" : ""}`}
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
              className={`btn ${lfButton == "false" ? "active-color" : ""}`}
              htmlFor="land-f"
            >
              False
            </label>
          </div>
        </div>
      </div>

      <div className="clear-wrapper">
        <button className="clear" onClick={clearAll}>
          Clear all filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
