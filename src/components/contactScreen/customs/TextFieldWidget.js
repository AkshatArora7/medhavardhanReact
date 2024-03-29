import React, { useState, useRef } from "react";
import "../ContactMainScreen.css";

export default function TextFieldWidget({
  name,
  label,
  value,
  onChange,
  validations,
  type,
  erros,
  setErrors,
}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  function validate(validations) {
    setErrors((prev) => ({
      ...prev,
      [name]: validations.map((errorsFor) => errorsFor(value)),
    }));
  }

  return (
    <div className={`input-container ${focused ? "focus" : ""}`}>
      <input
        type={type}
        name={name}
        ref={ref}
        className="contactScreenInput"
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => {value===""?setFocused(false):validate(validations); validate(validations)}}
      />
      <label>{label}</label>
      <span>{label}</span>
    </div>
  );
}
