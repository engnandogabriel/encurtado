import React from "react";
import { HeaderStyles } from "../../styles/Header/index.js";
import Shorten from "../../assets/shorten.png";
import useMedea from "../../hooks/useMedea/index.js";
import NavMobile from "./NavMobile/index.jsx";
import Link from "../../Components/Link/index.jsx";

function Header() {
  const mobile = useMedea("(max-width:40rem)");

  if (mobile) {
    return <NavMobile />;
  }

  return (
    <HeaderStyles>
      <div className="logo">
        <img src={Shorten} />
        <h2>Encurtado-dev</h2>
      </div>
      <div className="links">
        <Link href="/" value="Home" />
        <Link href="/dados" value="Dados" />
      </div>
    </HeaderStyles>
  );
}

export default Header;
