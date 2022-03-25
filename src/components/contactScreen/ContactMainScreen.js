import React, { useState } from "react";
import "../../App.css";
import "./ContactMainScreen.css";
import emailjs from "emailjs-com";
import TextFieldWidget from "./customs/TextFieldWidget.js";
import { motion } from "framer-motion";

function ContactMainScreen() {
  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const defaultErros = {
    name: [],
    email: [],
    phoneNumber: [],
    message: [],
  };

  const [values, setValues] = useState(defaultValues);
  const [mailSent, setMailSent] = useState(false);
  const [errors, setErrors] = useState(defaultErros);
  function isRequired(val) {
    return val.length > 0 ? "" : "Connot be blank";
  }

  function isEmail(val) {
    const ai = val.indexOf("@");
    const gdi = val
      .split("")
      .reduce((acc, char, i) => (char === "." ? i : acc), 0);
    return ai > -1 && gdi > ai ? "" : "Must be an Email";
  }
  const [isFocused, setFocusedNew] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Clicked on button");
    console.log({ values });

    emailjs
      .sendForm(
        "service_xzzzndn",
        "template_u1wdpej",
        e.target,
        "qENOLKATQ8olpxtXu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setMailSent(true);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="contactMainContainer">
      <span className="big-circle"></span>
      <img src="./images/contactPage/shape.png" className="square" alt="" />
      <div className="contactScreenForm">
        <div className="contactScreen-info">
          <h3 className="contactScreenTitle">Let's get in touch</h3>
          <p className="contactScreenText">
            While we're running to make our platform and coaching better,
            there's an easy manner with a view to getting in contact with us, in
            order that we will without problems and successfully solve all of
            your queries.
          </p>
          <div className="contactScreenInfo">
            {/* <div className="contactScreenInformation">
              <img
                src="./images/contactPage/location.png"
                alt="Location"
                className="contactScreenIcon"
              />
              <p>Not yet decided</p>
            </div> */}
            <div className="contactScreenInformation">
              <img
                src="./images/contactPage/email.png"
                alt="Location"
                className="contactScreenIcon"
              />
              <p>officialmedhavardhan@gmail.com</p>
            </div>
            <div className="contactScreenInformation">
              <img
                src="./images/contactPage/phone.png"
                alt="Location"
                className="contactScreenIcon"
              />
              <p>+918750504538</p>
            </div>
          </div>
          <div className="contactScreenSocial-media">
            <p className="connectWithUS">Connect with us :</p>

            <div className="contactScreenWrapper">
              {/* <div className="contactScreenIconButton">
                    <div className="sontactScreenSocialIcon">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <span>Facebook</span>
                </div> */}
              <div
                className="contactScreenIconButton"
                onClick={() =>
                  openInNewTab(
                    "https://wa.me/+918750504538?text=Hello%2C%20I%27m%20inquisitive%20about%20reserving%20a%20demo%20session%20with%20Medhavardhan%2C%20can%20I%20get%20to%20know%20the%20details%3F"
                  )
                }
              >
                <div className="sontactScreenSocialIcon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <span>Whatsapp</span>
              </div>
              <div
                className="contactScreenIconButton"
                onClick={() =>
                  openInNewTab("https://twitter.com/medhavardhanedu")
                }
              >
                <div className="sontactScreenSocialIcon">
                  <i className="fab fa-twitter"></i>
                </div>
                <span>Twitter</span>
              </div>
              <div
                className="contactScreenIconButton"
                onClick={() =>
                  openInNewTab(
                    "https://www.instagram.com/medhavardhanofficial/"
                  )
                }
              >
                <div className="sontactScreenSocialIcon">
                  <i className="fab fa-instagram"></i>
                </div>
                <span>Instgram</span>
              </div>
              <div
                className="contactScreenIconButton"
                onClick={() => openInNewTab("https://t.me/taruns89")}
              >
                <div className="sontactScreenSocialIcon">
                  <i className="fab fa-telegram"></i>
                </div>
                <span>Telegram</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contactScreen-form">
          {mailSent === false ? (
            <>
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form className="contactFormScreen" onSubmit={sendEmail}>
                <h3 className="contactScreenTitle">Contact us</h3>
                <TextFieldWidget
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={(val) => {
                    const nameOut = val;
                    setValues((prev) => ({
                      ...prev,
                      name: nameOut,
                    }));
                  }}
                  validations={[isRequired]}
                  errors={errors.name}
                  setErrors={setErrors}
                />
                <TextFieldWidget
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={(val) => {
                    const emailOut = val;
                    setValues((prev) => ({
                      ...prev,
                      email: emailOut,
                    }));
                  }}
                  validations={[isRequired, isEmail]}
                  errors={errors.email}
                  setErrors={setErrors}
                />
                <TextFieldWidget
                  label="Phone Number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={(val) => {
                    const phoneNumberOut = val;
                    setValues((prev) => ({
                      ...prev,
                      phoneNumber: phoneNumberOut,
                    }));
                  }}
                  validations={[isRequired]}
                  errors={errors.phoneNumber}
                  setErrors={setErrors}
                />
                <div
                  className={`input-container ${
                    isFocused ? "focus" : ""
                  } textarea`}
                >
                  <textarea
                    name="message"
                    className="contactScreenInput"
                    onChange={(val) => {
                      const messageOut = val;
                      setValues((prev) => ({
                        ...prev,
                        message: messageOut,
                      }));
                    }}
                    onFocus={() => setFocusedNew(true)}
                    onBlur={() => {values.message===""&&setFocusedNew(false)}}
                  />
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="contactScreenButton"
                />
              </form>
            </>
          ) : (
            <>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="contactMailSent column"
              >
                <p className="contactMailSentTextHeading">Congratulations!!!</p>
                <p className="contactMailSentText">
                  Your form has been submitted.
                </p>
                <p className="contactMailSentText">
                  Our team will contact you as soon as possible and till then,
                  keep aspiring.
                </p>
                <p className="contactMailSentText spaceNeeded">Thankyou.</p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMainScreen;

{
  /* <div className="input-container">
                        <input type="text" name="name" className="contactScreenInput"/>
                        <label for="">Name</label>
                        <span>Name</span>
                    </div>
                    <div className={`input-container ${focused ? "focus" : ""}`}>
                        <input type="email" name="email" className="contactScreenInput"/>
                        <label for="">Email</label>
                        <span>Email</span>
                    </div>
                    <div className={`input-container ${focused ? "focus" : ""}`}>
                        <input type="tel" name="phoneNumber" className="contactScreenInput"/>
                        <label for="">Phone Number</label>
                        <span>Phone Number</span>

                    </div>
                    <div className={`input-container ${focused ? "focus" : ""} textarea`}>
                        <textarea name="message" className="contactScreenInput"/>
                        <label for="">Message</label>
                        <span>Message</span>

                    </div> */
}
