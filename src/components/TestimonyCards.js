import React, { useState } from "react";
import "./TestimonyCards.css";

function TestimonyCards({
  studentFirstName,
  studentLastName,
  studentResult,
  studentTestimony,
  studentAvatar,
  itemId
}) {
  const [mainDataValue, setDataTestimony] = useState(studentResult);

  return (
    <div
      className="testimonyCardSingle"
      onMouseOver={() => setDataTestimony(studentTestimony)}
      onMouseOut={() => setDataTestimony(studentResult)}
    >
      <div className="testimonyData column">
        <div className="testimonyDataHeading row">
          <img
            src={studentAvatar}
            alt="avatar"
            className="testimonyAvatar"
          ></img>
          <div className="testimonyNameColumn column">
            <h1 className="testimonyName">{studentFirstName}</h1>
            <h1 className="testimonyName">{studentLastName}</h1>
          </div>
        </div>
        <div className="testimonyMainData" style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{mainDataValue}</div>
      </div>
    </div>
  );
}

export default TestimonyCards;
