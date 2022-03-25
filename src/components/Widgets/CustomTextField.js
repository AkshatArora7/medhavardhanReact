import React, { useState, useRef } from "react";
import "./CustomTextField.css";

export default function CustomTextField ({
  name,
  label,
  value,
  onChange,
  validations,
  erros,
  setErrors,
}){
  // const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  function validate(validations){
    setErrors(prev =>({...prev, [name]: validations.map((errorsFor)=>errorsFor(value))})
    );
  }

  return (
    <div>
      <div
        className={`form-field ${focused ? "is-focused" : ""} ${
          value.length > 0 ? "has-value" : ""
        }`}
      >
        <div className="control">
          <label onClick={() => ref.current.focus()}>{label}</label>
          <input
            className="inputText"
            name={name}
            ref={ref}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => {setFocused(false); validate(validations)}}
          ></input>
        </div>
      </div>
    </div>
  );
};
