import React from "react";
import { ButtonStyles } from "../../styles/Button/index.js";

function Button({ value, onClick }) {
  return <ButtonStyles onClick={onClick}>{value}</ButtonStyles>;
}

export default Button;
