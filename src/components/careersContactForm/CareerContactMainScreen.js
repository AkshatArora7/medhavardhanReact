import React, { useState } from "react";
import "../../App.css";
import "./CareerContactMainScreen.css";
import emailjs from "emailjs-com";
import TextFieldWidget from "./customs/CareerTextFieldWidget.js";
import { motion } from "framer-motion";


function CareerContactMainScreen() {
  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
    qualifications: "",
    resume: "",
  };

  const defaultErros = {
    name: [],
    email: [],
    phoneNumber: [],
    qualifications: [],
    resume: [],
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
        "service_dfodz8x",
        "template_4svgzhk",
        e.target,
        "Ubb-GqURr9knHdGiT"
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
    <div className="careerMainContainer">
      <span className="careerScreenbig-circle"></span>
      <img
        src="./images/contactPage/shapeC.png"
        className="careerScreenSquare"
        alt=""
      />
      <div className="careerScreenForm">
        <div className="careerScreen-info">
          <h3 className="careerScreenTitle">Let's get in touch</h3>
          <p className="careerScreenText">
            While we're running to make our platform and coaching better,
            there's an easy manner with a view to getting in contact with us, in
            order that we will without problems and successfully solve all of
            your queries.
          </p>
          <div className="careerScreenInfo">
            {/* <div className="careerScreenInformation">
              <img
                src="./images/contactPage/locationC.png"
                alt="Location"
                className="careerScreenIcon"
              />
              <p>Not yet decided</p>
            </div> */}
            <div className="careerScreenInformation">
              <img
                src="./images/contactPage/emailC.png"
                alt="Location"
                className="careerScreenIcon"
              />
              <p>officialmedhavardhan@gmail.com</p>
            </div>
            <div className="careerScreenInformation">
              <img
                src="./images/contactPage/phoneC.png"
                alt="Location"
                className="careerScreenIcon"
              />
              <p>+918750504538</p>
            </div>
          </div>
          <div className="careerScreenSocial-media">
            <p className="connectWithUS">Connect with us :</p>

            <div className="careerScreenWrapper">
              {/* <div className="careerScreenIconButton">
                    <div className="careerScreenSocialIcon">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <span>Facebook</span>
                </div> */}
              <div
                className="careerScreenIconButton"
                onClick={() =>
                  openInNewTab(
                    "https://wa.me/+918750504538?text=Hello%2C%20I%27m%20inquisitive%20about%20reserving%20a%20demo%20session%20with%20Medhavardhan%2C%20can%20I%20get%20to%20know%20the%20details%3F"
                  )
                }
              >
                <div className="careerScreenSocialIcon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <span>Whatsapp</span>
              </div>
              <div
                className="careerScreenIconButton"
                onClick={() =>
                  openInNewTab("https://twitter.com/medhavardhanedu")
                }
              >
                <div className="careerScreenSocialIcon">
                  <i className="fab fa-twitter"></i>
                </div>
                <span>Twitter</span>
              </div>
              <div
                className="careerScreenIconButton"
                onClick={() =>
                  openInNewTab(
                    "https://www.instagram.com/medhavardhanofficial/"
                  )
                }
              >
                <div className="careerScreenSocialIcon">
                  <i className="fab fa-instagram"></i>
                </div>
                <span>Instgram</span>
              </div>
              <div
                className="careerScreenIconButton"
                onClick={() => openInNewTab("https://t.me/taruns89")}
              >
                <div className="careerScreenSocialIcon">
                  <i className="fab fa-telegram"></i>
                </div>
                <span>Telegram</span>
              </div>
            </div>
          </div>
        </div>

        <div className="careerScreen-form">
          {mailSent === false ? (
            <>
              <span className="careerScreenCircle careerone"></span>
              <span className="careerScreenCircle careertwo"></span>
              <form className="careerFormScreen" onSubmit={sendEmail}>
                <h3 className="careerScreenTitle">Register as a Teacher</h3>
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
                <TextFieldWidget
                  label="Experience"
                  name="qualifications"
                  value={values.qualifications}
                  onChange={(val) => {
                    const qualificationsOut = val;
                    setValues((prev) => ({
                      ...prev,
                      qualifications: qualificationsOut,
                    }));
                  }}
                  validations={[isRequired]}
                  errors={errors.qualifications}
                  setErrors={setErrors}
                />
                <TextFieldWidget
                  label="Resume Link"
                  name="resume"
                  value={values.resume}
                  onChange={(val) => {
                    const resumeOut = val;
                    setValues((prev) => ({
                      ...prev,
                      resume: resumeOut,
                    }));
                  }}
                  validations={[isRequired]}
                  errors={errors.resume}
                  setErrors={setErrors}
                />
                <input
                  type="submit"
                  value="Send"
                  className="careerScreenButton"
                />
              </form>
            </>
          ) : (
            <>
              <motion.div
                className="careerMailSent column"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <p className="careerMailSentTextHeading">Congratulations!!!</p>
                <p className="careerMailSentText">
                  Your Application has been submitted.
                </p>
                <p className="careerMailSentText">
                  Our team will contact you as soon as possible and till then,
                  keep aspiring.
                </p>
                <p className="careerMailSentText spaceNeeded">Thankyou.</p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CareerContactMainScreen;
