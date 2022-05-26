import React from "react";
import "../App.css";
import "./Courses.css";
import "@mui/material";
import ScrollableCourses from "./Widgets/ScrollableCourses.js";
import ActionAreaCard from "./CoursesCards";

function Courses() {
  const elemPrefix = "subject";
  const getId = (index: number) => `${elemPrefix}${index}`;

  const getItems = () => [
    {
      subjectName: "Chemistry",
      firstImg: "/images/chemistry 1.png",
      secondImg: "/images/chemistry 2.png",
      subjectText: 'The branch of science that deals with the properties, composition, and structure of matter, how they change, and the energy that is released or absorbed when they change.',
      itemId: getId(1),},
    
    {subjectName: "Physics",
      firstImg: "/images/physics 1.png",
      secondImg: "/images/physics 2.png",
      subjectText: 'The branch of science that deals with the structure of matter and how the fundamental constituents of the universe interact with it.',
      itemId: getId(2),},
    
    {subjectName: "Biology",
      firstImg: "/images/biology 1.png",
      secondImg: "/images/biology 2.png",
      subjectText: 'The science that studies life, and living things, and the evolution of life. Living things include animals, plants, fungi, and microorganisms such as bacteria and archaea.',
      itemId: getId(3),},
    
    {subjectName: "English",
      firstImg: "/images/english 1.png",
      secondImg: "/images/english 2.png",
      subjectText: ' English is important for students as it broadens their minds, develops emotional skills, improve the quality of life by providing job opportunities.',
      itemId: getId(4),},
    
    {subjectName: "Machine Learning",
      firstImg: "/images/machine 1.png",
      secondImg: "/images/machine 2.png",
      subjectText: 'The field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across.',
      itemId: getId(5),},
    
    {subjectName: "Science",
      firstImg: "/images/science 1.png",
      secondImg: "/images/science 2.png",
      subjectText: 'The pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence.',
      itemId: getId(6),},
    
    // {subjectName: "Data Structure",
    //   firstImg: "/images/data structure 1.png",
    //   secondImg: "/images/data sturcture 2.png",
    //   subjectText: `${dummyText}`,
    //   itemId: getId(7),},
    
    {subjectName: "C++",
      firstImg: "/images/c++ 1.png",
      secondImg: "/images/c++ 2.png",
      subjectText: "The 4th most popular language in the world, according to the TIOBE index. It's used in various areas where high-performance software is needed. For example, Adobe products, Unreal Engine, and browsers like Chrome.",
      itemId: getId(8),},
  
    // {subjectName: "Machine Learning",
    //   firstImg: "/images/machine 1.png",
    //   secondImg: "/images/machine 2.png",
    //   subjectText: `${dummyText}`,
    //   itemId: getId(9),},
  ];
  const [items] = React.useState(getItems);
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
        <div className="subjectCardsMobile">
          <div className="mobileCardsColumn column">
          {items.map(
            ({ subjectName, firstImg, secondImg, subjectText, itemId }) => (
              <ActionAreaCard
                firstImg={firstImg}
                secondImg={secondImg}
                subjectName={subjectName}
                subjectText={subjectText}
                itemId={itemId} // NOTE: itemId is required for track items
              />
            )
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
