import React from "react";
import "../App.css";
import "./AboutPage.css";
import { motion } from "framer-motion";

function AboutPage() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  
  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
    transition: {
      type:'spring',
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  };

  return (
    <div
      className="about-container"
    >
      <div className="aboutMain row">
        <div className="girlvectorart stack">
          <motion.img
            variants={container}
            initial="hidden"
            animate="visible"
            src="/images/aboutVectorArt2.png"
            className="aboutVectorArt"
            alt="about"
          >
          </motion.img>

          <motion.img
            key={0}
            variants={item}
            initial="hidden"
            animate="visible"
            src="/images/circleS.png"
            className="smallCircleAbout"
            alt="circleS"
          ></motion.img>

          <motion.img
            key={1}
            variants={item}
            initial="hidden"
            animate="visible"
            src="/images/circleM.png"
            className="mediumCircleAbout"
            alt="circleM"
          ></motion.img>

          <motion.img

            key={2}
            variants={item}
            initial="hidden"
            animate="visible"
            src="/images/circleL.png"
            className="logoCircleAbout"
            alt="circleL"
          ></motion.img>

          
        </div>
        <div className="aboutDetails column">
          <h1 className="aboutHeading">What is Medhavardhan?</h1>
          <h2 className="aboutText">
            A unified mastering platform that permits instructors to supply
            streamlined and incorporated mastering to students, and also
            provides streamlined services through our web portal. With all our
            well designed and customised notes, we make sure that you get the
            knowledge of each and everything in your own way of learning.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
