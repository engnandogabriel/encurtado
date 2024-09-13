import styled from "styled-components";

export const NavMobileStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 100;
  margin: 24px 0;

  .logo-menu {
    height: 30px;
    width: 30px;
    display: flex;
    img {
      width: 40px;
      height: 40px;
    }
    h2 {
      white-space: nowrap;
    }
  }
`;

export const NavDashboardMobileStyled = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 0;
  padding: 1rem 1rem;
  transform: translateX(-10px);
  opacity: 0;
  pointer-events: none;
  z-index: 100;

  .link-mobile {
    div {
      margin-bottom: 12px;
    }
  }
`;
