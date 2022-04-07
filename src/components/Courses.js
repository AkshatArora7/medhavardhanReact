import React from "react";
import "../App.css";
import "./Courses.css";
import "@mui/material";
import ActionAreaCard from "./CoursesCards";
import ScrollableCourses from "./Widgets/ScrollableCourses.js";

function Courses() {
  return (
    <div className="courses-container">
      <div className="coursesMain column">
        <div className="coursesHeader row">
          <div className="coursesDetails column">
            <div className="coursesHeadingMain column">
              <h1 className="coursesHeading">Courses</h1>
              <h1 className="coursesHeading">Available Right Now</h1>
            </div>
            <h1 className="coursesText">
              As per our vision we are always ready to serve all the latest
              courses in the perfect manner, nevertheless we are well equipped
              with all the certified trainers to make you achieve your
              aspirations by preparing you. Check out all the courses available.
            </h1>
          </div>
          <img
            src="/images/coursesVectorArt.png"
            className="coursesVectorArt"
          ></img>
        </div>
        <div className="subjectCards">
          <ScrollableCourses />
        </div>
      </div>
    </div>
  );
}

export default Courses;
