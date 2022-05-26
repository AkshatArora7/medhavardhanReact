import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import FormMain from "./contactForm/formMain.js";

function Contacts() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div
      className="contacts-container"
    >
      <div className="contactMainContent">
        <div className="contactColumn column">
          <div className="contactHeading">About</div>
          <div className="contactDescrp">
            We are well equipped with a strong faculty team to support us. Our
            vision is to create an efficient knowledge based community that does
            not see work as a burden, but enjoys it to the best. This institute
            keeps in mind the aspirations, thoughts and expectations of young
            minds and tries to accelerate their preparation with efficiency.
          </div>
        </div>
        <div className="contactColumn column">
          <div className="contactHeading">Courses</div>
          <div className="contactDescrp needgap">CBSE</div>
          <div className="contactDescrp needgap">NCERT</div>
          <div className="contactDescrp needgap">JEE Main</div>
          <div className="contactDescrp needgap">JEE Advance</div>
          <div className="contactDescrp needgap">NEET</div>
          <div className="contactDescrp needgap">CAT</div>
        </div>
        <div className="contactColumn column">
          <div className="contactHeading">Classes</div>
          {/* <div className="contactDescrp needgap">Class 1st-3rd</div>
          <div className="contactDescrp needgap">Class 4th-5th</div> */}
          <div className="contactDescrp needgap">
            <Link to="/courses" className="contact-links">
              Class 9th-10th
            </Link>
          </div>
          <div className="contactDescrp needgap">
            <Link to="/courses" className="contact-links">
              Class 11th-12th
            </Link>
          </div>
          <div className="contactDescrp needgap">
            <Link to="/courses" className="contact-links">
              Professional
            </Link>
          </div>
        </div>
        <div className="contactColumn column">
          <div className="contactHeading">Company</div>
          {/* <div className="contactDescrp needgap">About us</div> */}
          {/* <div className="contactDescrp needgap">Blogs</div> */}
          <div className="contactDescrp needgap">
            <Link to="/careers" className="contact-links">
              Careers
            </Link>
          </div>
          <div
            className="contactDescrp needgap clickable"
            onClick={() =>
              openInNewTab(
                "https://wa.me/+918750504538"
              )
            }
          >
            FAQ
          </div>
          <div className="contactDescrp needgap">
            <Link to="/contact" className="contact-links">
              Support
            </Link>
          </div>
          {/* <div className="contactDescrp needgap">Disclaimer</div> */}
        </div>
        <div className="contactColumn column">
          <div className="contactHeading">Connect with us</div>
          <FormMain />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
