import React from 'react';
import "../../App.css";
import './DirectorsMessage.css'

function DirectorsMessage(){
    return (
        <div className="dmContainer" style ={ { backgroundImage: "url('/images/dmBackground.png')" } }>
            <div className="dmMainRow row">
                <img src="./images/dmVectorArt.png" className="dmVectorArt" alt="Directors Vector"></img>
                <div className="dmMainContentColumn column">
                    <h1 className="dmCommas">"</h1>
                    <h2 className="dmText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida vel enim eget fringilla. Suspendisse accumsan eros sed enim maximus consequat. Mauris ullamcorper egestas mollis. Duis tempus nulla at ante imperdiet, sit amet tristique nunc aliquet. In eu tincidunt augue</h2>
                    <h1 className="dmCommasEnd">"</h1>
                    <h1 className="dmName">Tarun Singh</h1>
                    <h2 className="dmRole">Director, Medhavardhan</h2>
                </div>
            </div>
        </div>
    )
}

export default DirectorsMessage;