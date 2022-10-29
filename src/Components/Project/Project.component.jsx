import React, { useState, useEffect } from "react";

import Berkay from "Assets/images/us/berkay.png";
import Berk from "Assets/images/us/berk.png";
import Tanalp from "Assets/images/us/tanalp.png";

import "./Project.styles.scss";

const Project = (props) => {
  return (
    <div className="project-container">
      <div className="project-info">
        <h1>Project</h1>
        <p>
        This project aims to diagnose a different dieases  by a machine learning-based
        interactive system. In detail, we proposed a decision support system
        that is easy to use, benefiting from several machine learning
        algorithms in the background.
        </p>
      </div>
      <div className="video-container">
        <iframe
          width="760"
          height="315"
          src="https://www.youtube.com/watch?v=OVfQTyPxUFE&ab_channel=AsterHospitals%2CBangalore"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
        />
      </div>
      <div className="about-us"></div>
    </div>
  );
};

export default Project;
