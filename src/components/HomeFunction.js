import React from "react";
import '../App.css';
import './HomeFunction.css';



const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

function HomeFunction() {
    return (
        <div className='home-container'>
            <img src='/images/homeBackground.png' className="HomeBackgroundImg" alt="medhavardhan" />
            <h1 className="homeSlogan">Arpire. Prepare. Achieve</h1>
            <div className="homeMain row">
                <div className="homeColumn column">
                    <div className="homeInfo column">
                        <h1 className="homeHeading">Take the first step to learn with us</h1>
                        <h2 className="homeText">We are well equipped with a strong faculty team to support us, accompanied with fantastic teaching pedagogy that runs well with the young minds. Our vision is to create an efficient knowledge based community that doesn’t see work as a burden, but enjoys it to the best.
This institute keeps in mind the aspirations, thoughts and expectations of young minds and tries to accelerate their preparation with efficient strategy.</h2>
                        <div className='home-btns'>
                            <button className='homeButton' onClick={() => openInNewTab('https://wa.me/+918750504538?text=Hello%2C%20I%27m%20inquisitive%20about%20reserving%20a%20demo%20session%20with%20Medhavardhan%2C%20can%20I%20get%20to%20know%20the%20details%3F')}>
                                Book a Demo
                            </button>
                        </div>
                    </div>
                    <div className="homeFooter row">

                        <div className="footerHeadingRow row">
                            <img src="/images/homeIconClasses.png" alt="books" className="homeIcons"></img><div className="footers Column"> <h2 className="homeFooterHeading">New Classes</h2> <h2 className="footerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt metus eu efficitur ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla tincidunt metus eu efficitur ultrices</h2></div>
                        </div>

                        <div className="homeSeperator"></div>
                        <div className="footerHeadingRow row">
                            <img src="/images/homeIconTop.png" alt="books" className="homeIcons"></img><div className="footers Column"> <h2 className="homeFooterHeading">Top Courses</h2> <h2 className="footerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt metus eu efficitur ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt metus eu efficitur ultrices</h2></div>
                        </div>

                        <div className="homeSeperator"></div>
                        <div className="footerHeadingRow row">
                            <img src="/images/homeIconBooks.png" alt="books" className="homeIcons"></img><div className="footers Column"> <h2 className="homeFooterHeading">Full E-Books</h2> <h2 className="footerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt metus eu efficitur ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt metus eu efficitur ultrices</h2></div>
                        </div>
                    </div>
                </div>

                <div className="homeVectorArtContainer">
                    <img className="homeVectorArt" src="/images/homeVectorArt.png" alt="homeVectorArt"></img>
                </div>
            </div>

        </div>
    );
}

export default HomeFunction;