import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="allservices">
        <div className="service1">
          <div className="icon">
            <i class="fas fa-microchip"></i>
          </div>
          <h2>Desktop Application</h2>
          <p>
            Devman is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            bran.
          </p>
        </div>
        <div className="service2">
          <div className="icon">
            <i class="fas fa-mobile-alt "></i>
          </div>
          <h2>Mobile Application</h2>
          <p>
            Devman is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            bran.
          </p>
        </div>
        <div className="service3">
          <div className="icon">
            <i class="fa-solid fa-window-restore"></i>
          </div>
          <h2>Website Development</h2>
          <p>
            Devman is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            bran.
          </p>
        </div>
        <div className="service4">
          <div className="icon">
            <i class="fas fa-star"></i>
          </div>
          <h2>Game Development</h2>
          <p>
            Devman is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            bran.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
