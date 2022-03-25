import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./formMain.css";
import CustomTextField from "../Widgets/CustomTextField.js";

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

function FormMain() {


  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Clicked on button');
    console.log({values});
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

      setValues(defaultValues);
  };

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
  const [errors, setErrors] = useState(defaultErros);

  return (
    <div className="formMainColumn column">
      <form onSubmit={sendEmail}>
        <CustomTextField
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
        <CustomTextField
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
        <CustomTextField
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
        <CustomTextField
          label="Message"
          name="message"
          value={values.message}
          onChange={(val) => {
            const messageOut = val;
            setValues((prev) => ({
              ...prev,
              message: messageOut,
            }));
          }}
          validations={[isRequired]}
          errors={errors.message}
          setErrors={setErrors}
        />
        <div>
          <input type='submit' value="Submit" className="submitButtonContact"/>
        </div>
      </form>
    </div>
  );
}

export default FormMain;
