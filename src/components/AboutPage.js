import React from "react";
import "../App.css";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: "url('/images/aboutBackground.png')" }}
    >
      <div className="aboutMain row">
        <img
          src="/images/aboutVectorArt.png"
          className="aboutVectorArt"
          alt="about"
        ></img>
        <div className="aboutDetails column">
          <h1 className="aboutHeading">What is Medhavardhan?</h1>
          <h2 className="aboutText">
            A unified mastering platform that permits instructors to supply
            streamlined and incorporated mastering to students, and also
            provides streamlined services through our web portal. With all our
            well designed and customised notes, we make sure that you get the knowledge of each
            and everything in your own way of learning.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
