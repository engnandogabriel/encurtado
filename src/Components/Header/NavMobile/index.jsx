import React, { useState } from "react";
import useMedea from "../../../hooks/useMedea/index.js";
import { ButtonMobile } from "../../../styles/Button/index.js";
import Shorten from "../../../assets/shorten.png";
import {
  NavMobileStyle,
  NavDashboardMobileStyled,
} from "../../../styles/NavMobile/index.js";
import Link from "../../Link/index.jsx";

function NavMobile() {
  const mobile = useMedea("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <NavMobileStyle>
        <div className="logo-menu">
          <img src={Shorten} />
          <h2>Encurtado-dev</h2>
        </div>
        {mobile && (
          <ButtonMobile
            aria-label="Menu"
            className={mobileMenu && "menuMobileButtonActive"}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></ButtonMobile>
        )}
      </NavMobileStyle>
      <NavDashboardMobileStyled className={mobileMenu && "activeMenuMobile"}>
        <div className="link-mobile">
          <Link href="/" value="Home" />
          <Link href="/dados" value="Dados" />
        </div>
      </NavDashboardMobileStyled>
    </>
  );
}

export default NavMobile;
