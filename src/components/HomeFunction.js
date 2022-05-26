import React, { useState } from "react";
import "../App.css";
import "./HomeFunction.css";
import { motion } from "framer-motion";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function HomeFunction() {
  return (
    <div className="home-container">
      <img
        // src="/images/homeBackground.png"
        className="HomeBackgroundImg"
        alt="medhavardhan"
      />
      {/* <h1 className="homeSlogan">Aspire. Prepare. Achieve</h1> */}
      <div className="row">
        <motion.h1
          className="homeSlogan"
          initial={{ x: -100, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1 }}
        >
          Aspire.
        </motion.h1>
        <motion.h1
          className="homeSlogan"
          initial={{ x: -100, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
        >
          Prepare.
        </motion.h1>
        <motion.h1
          className="homeSlogan"
          initial={{ x: -100, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 2 }}
        >
          Achieve.
        </motion.h1>
      </div>
      <div className="homeMain row">
        <div className="homeColumn column">
          <div className="homeInfo column">
            <h1 className="homeHeading">
              Take the first step to learn with us
            </h1>
            <div className="homeText">
              <span></span>
            </div>
            <div className="home-btns">
              <button
                className="homeButton"
                onClick={() =>
                  openInNewTab(
                    "https://wa.me/+918750504538?text=Hello%2C%20I%27m%20inquisitive%20about%20reserving%20a%20demo%20session%20with%20Medhavardhan%2C%20can%20I%20get%20to%20know%20the%20details%3F"
                  )
                }
              >
                Book a Demo
              </button>
            </div>
          </div>
          <div className="homeFooter row">
            <div className="footerHeadingRow row">
              <img
                src="/images/homeIconClasses.png"
                alt="books"
                className="homeIcons"
              ></img>
              <div className="footers Column">
                {" "}
                <h2 className="homeFooterHeading">New Classes</h2>{" "}
                <h2 className="footerText">
                  Our class are supplied with all the necessary equipments to
                  make you prepare for you goals. We are all the things that you
                  may think of to have in an institute altogether.
                </h2>
              </div>
            </div>
            <div className="homeSeperator"></div>
            <div className="footerHeadingRow row">
              <img
                src="/images/homeIconTop.png"
                alt="books"
                className="homeIcons"
              ></img>
              <div className="footers Column">
                {" "}
                <h2 className="homeFooterHeading">Top Courses</h2>{" "}
                <h2 className="footerText">
                  We have all the latest courses with certified trainers. Learn
                  how to become your idol by just getting a demo class with
                  Medhavardhan.
                </h2>
              </div>
            </div>

            <div className="homeSeperator"></div>
            <div className="footerHeadingRow row">
              <img
                src="/images/homeIconBooks.png"
                alt="books"
                className="homeIcons"
              ></img>
              <div className="footers Column">
                {" "}
                <h2 className="homeFooterHeading">Full E-Books</h2>{" "}
                <h2 className="footerText">
                  We have full coverage of all your courses into our well
                  designed notes which is available as both paperback and
                  electronic version, just choose your perfect way of learning.
                </h2>
              </div>
            </div>
          </div>
          <div className="homeFooterMobile column">

            <div className="footerHeadingRow row">
              <img
                src="/images/homeIconClasses.png"
                alt="books"
                className="homeIcons"
              ></img>
              <div className="footers Column">
                {" "}
                <h2 className="homeFooterHeading">New Classes</h2>{" "}
                <h2 className="footerText">
                  Our class are supplied with all the necessary equipments to
                  make you prepare for you goals. We are all the things that you
                  may think of to have in an institute altogether.
                </h2>
              </div>
            </div>
            
            <div className="footerHeadingRow row">
              <img
                src="/images/homeIconTop.png"
                alt="books"
                className="homeIcons"
              ></img>
              <div className="footers Column">
                {" "}
                <h2 className="homeFooterHeading">Top Courses</h2>{" "}
                <h2 className="footerText">
                  We have all the latest courses with certified trainers. Learn
                  how to become your idol by just getting a demo class with
                  Medhavardhan.
                </h2>
              </div>
            </div>

            <div className="footerHeadingRow row">
              <img
                src="/images/homeIconBooks.png"
                alt="books"
                className="homeIcons"
              ></img>
              <div className="footers Column">
                {" "}
                <h2 className="homeFooterHeading">Full E-Books</h2>{" "}
                <h2 className="footerText">
                  We have full coverage of all your courses into our well
                  designed notes which is available as both paperback and
                  electronic version, just choose your perfect way of learning.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img
          className="homeVectorArt"
          src="/images/homeVectorArt.png"
          alt="homeVectorArt"
        ></img>
        {/* <motion.div
          className="homeVectorArtContainer"
          initial={{ scale: 0,}}
          animate={{ scale: 1 }}
          transition={{
            delay: 1,
            type: "tween",
            stiffness: 260,
          }}
        >
          <img
            className="homeVectorArt"
            src="/images/homeVectorArt.png"
            alt="homeVectorArt"
          ></img>
        </motion.div> */}
      </div>
    </div>
  );
}

export default HomeFunction;
