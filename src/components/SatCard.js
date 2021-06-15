import React from "react";
import "./styles/Card.scss";
function SatCard({ sats }) {
  return (
    <div className=" card_container">
      {sats.map((sat, i) => {
        return (
          <div key={i + 1} className="card_wrapper">
            <div className="image_wrapper">
              <img
                src={sat?.links?.mission_patch}
                className="sat_images"
                alt={sat?.mission_name}
              />
            </div>
            <h1 className="sat_name">
              {sat?.mission_name} #{sat?.flight_number}
            </h1>
            <ul style={{ listStyleType: "none" }} className="card_details">
              <li className="mission_id">
                <h1>
                  <strong>Mission Ids:</strong>
                </h1>
                <ul className="mission_id_ul" style={{ listStyleType: "disc" }}>
                  {sat.mission_id.map((id, i) => {
                    return <li key={i + 1}>{id}</li>;
                  })}
                </ul>
              </li>
              <li>
                <h1>
                  <strong>Launch Year: </strong>
                  {sat?.launch_year}
                </h1>
              </li>
              <li>
                <h1>
                  <strong>Successful Launch:</strong>{" "}
                  {sat.launch_success?.toString()}
                </h1>
              </li>

              <li>
                <h1>
                  <strong> Successful Landing: </strong>
                  {sat.rocket.first_stage.cores[0].land_success?.toString()}
                </h1>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SatCard;
