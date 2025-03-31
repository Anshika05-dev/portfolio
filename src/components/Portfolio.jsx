import React from "react";
import "./Portfolio.css";
import PortfolioCards from "./PortfolioCards.jsx";
import Skills from "./Skills.jsx";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="data">
        <span className="heading">Portfolio</span>
        <h3 className="sub-heading">My Amazing Works</h3>
        <p className="work-description">
          I take pride in paying attention to the smallest details and making
          sure that my work is pixel perfect. I am excited to bring my skills
          and experience to help businesses achieve their goals and create a
          strong online presence
        </p>
      </div>
      <div className="pcards">
        <div className="pcard">
          <PortfolioCards
            app={"Youtube"}
            app_description={"Web Application for Desiverse"}
            backgroundImage={bg1}
            link={"View Project ->"}
            floatDirection="left"
          />
        </div>
        <div className="pcard">
          <PortfolioCards
            app={"Vimeo"}
            app_description={"Web Application for Desiverse"}
            backgroundImage={bg2}
            link={"View Project ->"}
            floatDirection="right"
          />
        </div>
        <div className="pcard">
          <PortfolioCards
            app={"Soundcloud"}
            app_description={"Web Application for Desiverse"}
            backgroundImage={bg3}
            link={"View Project ->"}
            floatDirection="left"
          />
        </div>
        <div className="pcard">
          <PortfolioCards
            app={"Details"}
            app_description={"Web Application for Desiverse"}
            backgroundImage={bg4}
            link={"View Project ->"}
            floatDirection="right"
          />
        </div>
      </div>
      <div className="s_skills">
        <span className="heading">My Skills</span>
        <h3 className="sub-heading">I Develop My Skills Regularly</h3>
        </div>
        <div className="skill_name">
          <Skills skill_name={"Python"} width={'95%'}/>
          <Skills skill_name={"C++"} width={'80%'}/>
          <Skills skill_name={"Node.js"} width={'75%'}/>
          <Skills skill_name={"React"} width={'50%'}/>
          <Skills skill_name={"Sql"} width={'65%'}/>
          <Skills skill_name={"Mongodb"} width={'90%'}/>
        
      </div>
    </section>
  );
};

export default Portfolio;
