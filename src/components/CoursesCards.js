// import * as React from "react";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../App.css";

function ActionAreaCard({
  subjectName,
  firstImg,
  secondImg,
  subjectText,
  itemId,
}) {
  const [mainImgValue, setImg] = useState(firstImg);

  //  const styles = {
  //     media: {

  //     }
  // };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


  return (
    <div className="subjectsScroller" >
    <Card
      raised={false}
      onClick={()=>openInNewTab("https://app.medhavardhan.com")}
      onMouseOver={() => setImg(secondImg)}
      onMouseOut={() => setImg(firstImg)}
      sx={{
          bgcolor: "#D6D6D6",
          boxShadow: 0,
          cursor: 'pointer'
        }}
    >
      <div>
        <img src={mainImgValue} alt={subjectName} className="CardImg"/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#000033" fontFamily="Arial" fontWeight="600" fontSize="20px">
          {subjectName}
        </Typography>
        <Typography variant="body2" color="#000033" fontFamily="Cambria" fontWeight="600" fontSize="14px">
          {subjectText}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default ActionAreaCard;
