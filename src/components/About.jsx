import React from "react";
import "./About.css";
import AboutCards from "./AboutCards";
const About = () => {
  return (
    <section id='about'>
      <div className="abt-content">
        <span className="title">I'm a Developer</span>
        <h3 className="description">I Develop Application that Help People</h3>
        <p className="sub-description">
          I am skilled and passionate web designer with experience in creating
          visually appealing and user friendly websites. I have strong
          understanding of design and a keen eye for detail. I am profecient in
          HTML,CSS,JAVASCRIPT.
        </p>
      </div>
      <div className="cards">
        <div className="card">
        <AboutCards
          number={"01"}
          title={"Dedication"}
          des={
            "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat."
          }
        />
        </div>
        <div className="card">
        <AboutCards
          number={"02"}
          title={"Smart Work"}
          des={
            "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat."
          }
        />
        </div>
        <div className="card">
        <AboutCards
          number={"03"}
          title={"Intelligence"}
          des={
            "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat."
          }
        />
        </div>
      </div>
    </section>
  );
};

export default About;
