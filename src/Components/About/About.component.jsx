import React, { useState, useEffect } from "react";

import Berkay from "Assets/images/us/vandita.jpeg";
import Berk from "Assets/images/us/aditt.jpeg";
import Tanalp from "Assets/images/us/nishthaa.png";

import "./About.styles.scss";

const Person = (props) => {
  const { image, name, department } = props;
  return (
    <div className="person-container">
      <img src={image} />
     
    </div>
  );
};

const About = (props) => {
  return (
    <div className="about-container">
      <div className="about-info">
        <h1>About Us</h1>
        <p>
          This project aims to diagnose a different dieases  by a machine learning-based
          interactive system. In detail, we proposed a decision support system
          that is easy to use, benefiting from several machine learning
          algorithms in the background. 
        </p>
      </div>
      <div className="about-us">
        <div className="about-us-line">
          <Person name="Berkay Barlas" department="CE & EE" image={Berkay} />
          <Person
            name="Salih Berk Dınçer"
            department="MAVA & EE"
            image={Berk}
          />
        </div>
        <div className="about-us-line">
          <Person name="Tanalp Şengün" department="BA & EE" image={Tanalp} />
        </div>
      </div>
    </div>
  );
};

export default About;
