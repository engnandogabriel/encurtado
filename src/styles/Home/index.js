import styled from "styled-components";

export const HomeStyles = styled.div`
  width: 512px;
  height: 446px;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  color: #0d141c;
  padding: 16px;
  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #0d141c;
    margin: 24px auto;
  }

  .shortner-url {
    margin: 0 auto;
    color: #4f7396;
    p {
      font-size: 14px;
    }
  }

  .erro-shortner {
    display: flex;
    align-items: center;
    gap: 12px;
    color: red;
    margin: 12px 0;
  }

  .shortened-url {
    margin-top: 24px;

    div {
      width: 480px;
      height: 56px;
      background: #e8edf2;
      border-radius: 16px;
      display: flex;
      align-items: center;
      margin-top: 16px;
      padding: 16px;
    }
    h4 {
      font-size: 16px;
      color: #4f7396;
      font-weight: 400;
    }
  }
`;
