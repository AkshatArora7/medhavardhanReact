import React, { useState } from "react";
import "./CoursesScreen.css";

export default function CoursesButtons({ name, onClick, focused }) {

  return (
    <div
      className={`coursesScreenButton ${focused==={name} ? "focus" : ""}`}
      onClick={() => {
        onClick();
      }}
      
    >
      {name}
    </div>
  );
}
