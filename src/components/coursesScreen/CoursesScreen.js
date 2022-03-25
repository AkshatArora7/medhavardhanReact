import React, { useState } from "react";
import "./CoursesScreen.css";
import CoursesData from "./CoursesData.js";
import CoursesButtons from "./CoursesButtons.js"

function CoursesScreen() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
  const [items, setItems] = useState(CoursesData);
  const [focused, setfocus] = useState('All');

  const filterItem=(selectedCategory)=>{
      const updatedItems=CoursesData.filter((curElem)=>{
          return curElem.category === selectedCategory;
      });
      setItems(updatedItems);
  }

  return (
    <div className="coursesScreenMainContainer column">
      <h1 className="coursesScreenHeading">Courses we provide</h1>
      <hr />
      <div className="coursesScreenCategories row">
        <CoursesButtons onClick={()=>{setItems(CoursesData); setfocus('All')}} focused={focused} name="All"/>
        <CoursesButtons onClick={()=>filterItem('Class 12')} name="Class 12"/>
        <CoursesButtons onClick={()=>filterItem('Class 12')} name="Class 11"/>
        <CoursesButtons onClick={()=>filterItem('Class 10')} name="Class 10"/>
        <CoursesButtons onClick={()=>filterItem('Class 10')} name="Class 9"/>
        <CoursesButtons onClick={()=>filterItem('Professional')} name="Professional"/>
      </div>

      <div className="coursesScreenMainContent">
        <div className="cousesScreenTiles">
          {items.map((elem) => {
            return (
              <div className="coursesScreenTile" onClick={()=>openInNewTab('https://app.medhavardhan.com/')}>
                <div className="coursesScreenTileData row">
                  <img
                    src={elem.image}
                    alt={elem.name}
                    className="coursesScreenTileImage"
                  />
                  <div className="coursesScreenTileTexts column">
                    <p className="coursesScreenTileName">{elem.name}</p>
                    <p className="coursesScreenTileClass">{elem.class}</p>
                    <p className="coursesScreenTileDescription">
                      {elem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoursesScreen;
