import styled from "styled-components";

export const HeaderStyles = styled.div`
  width: 100%;
  height: 65px;
  background: #f7fafc;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  .logo {
    display: flex;

    gap: 8px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
  .link {
    display: flex;
    width: 84px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: #1a80e5;
    color: #f7fafc;
    border-radius: 12px;
  }
  .link:hover {
    background: #4f7396;
  }
`;
