import React from "react";
import '../App.css';
import './AboutPage.css';

function AboutPage(){
    return(
        <div className="about-container" style ={ { backgroundImage: "url('/images/aboutBackground.png')" } }>
            <div className="aboutMain row">
                <img src="/images/aboutVectorArt.png" className="aboutVectorArt" alt="about"></img>
                <div className="aboutDetails column">
                    <h1 className="aboutHeading">What is Medhavardhan?</h1>
                    <h2 className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ex lorem. Proin id iaculis velit, sit amet condimentum lacus. Nam a urna sed ante gravida malesuada ac at lorem. Fusce lacinia nulla augue, ut pulvinar ligula ullamcorper ullamcorper.</h2>
                </div>
            </div>

        </div>
    )
}

export default AboutPage;