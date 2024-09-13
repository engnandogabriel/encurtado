import React from "react";
import { InputStyles } from "../../styles/Input/index.js";

function Input({ value, setValue, placeholder }) {
  return (
    <InputStyles
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default Input;
