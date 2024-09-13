import React from "react";
import { LinkStyled } from "../../styles/Link/index.js";

function Link({ href, value, style }) {
  return (
    <LinkStyled>
      <a href={href}>{value}</a>
    </LinkStyled>
  );
}

export default Link;
