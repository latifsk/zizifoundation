import React from "react";
import { useLocation } from "react-router-dom";
import "../index.css";
import Support from "../components/support";

function ProjectDetails() {
  const location = useLocation();
  console.log("location", location);
  return (
    <div>
      {/*The head image section*/}
      <div>
        <img
          src={location.state.img}
          alt=""
          className="projectDetails__image"
        />
      </div>

      {/*The title, date and description section*/}
      <div className="projectDetails__title">{location.state.title}</div>
      <div className="projectDetails__date">{location.state.date}</div>
      <div className="projectDetails__description">
        {location.state.description}
      </div>

      {/*The spam image section*/}
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          padding: "20px",
          color: "var(--zizi-yellow)",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        Images from the event
      </div>
      <div>
        <div>
          <img
            src={location.state.img1}
            style={{ display: "block" }}
            alt=""
            className="projectDetails__spamImage"
          />
        </div>

        <div>
          <img
            src={location.state.img2}
            style={{ display: "block" }}
            alt=""
            className="projectDetails__spamImage"
          />
        </div>

        <div>
          <img
            src={location.state.img3}
            style={{ display: "block" }}
            alt=""
            className="projectDetails__spamImage"
          />
        </div>

        <div>
          <img
            src={location.state.img4}
            style={{ display: "block" }}
            alt=""
            className="projectDetails__spamImage"
          />
        </div>
      </div>

      <Support />
    </div>
  );
}

export default ProjectDetails;
