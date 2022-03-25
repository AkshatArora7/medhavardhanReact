import React from "react";
import '../App.css';
import './Courses.css';
import '@mui/material'
import ActionAreaCard from "./CoursesCards";
import ScrollableCourses from "./Widgets/ScrollableCourses.js";


function Courses(){
    return( 
        <div className="courses-container">
            <div className="coursesMain column">
                <div className="coursesHeader row">
                    <div className="coursesDetails column">
                        <div className="coursesHeadingMain column">
                            <h1 className="coursesHeading">Courses</h1>
                            <h1 className="coursesHeading">Available Right Now</h1>
                        </div>
                        <h1 className="coursesText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ex lorem. Proin id iaculis velit, sit amet condimentum lacus. Nam a urna sed ante gravida malesuada ac at lorem. Fusce lacinia nulla augue, ut pulvinar ligula ullamcorper ullamcorper.</h1>
                    </div>
                    <img src="/images/coursesVectorArt.png" className="coursesVectorArt"></img>
                </div>
                <div className="subjectCards">
                <ScrollableCourses/>
                </div>
            </div>

        </div>
    )
}

export default Courses;