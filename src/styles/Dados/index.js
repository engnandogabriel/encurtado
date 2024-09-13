import styled from "styled-components";

export const DadosStyles = styled.div`
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

  .link-data {
    display: flex;
    gap: 16px;
    align-items: center;
    margin: 24px 0;
  }
  .link-icon {
    background: #e8edf2;

    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 24px;
      width: 48px;
      color: #0d141c;
    }
  }
  .erro-find {
    display: flex;
    align-items: center;
    gap: 12px;
    color: red;
    margin: 12px 0;
  }
  .link-text {
    white-space: nowrap;
    h4 {
      font-size: 16px;
      color: #0d141c;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      color: #4f7396;
    }
  }
  @media (max-width: 800px) {
    .link-text {
      white-space: normal; /* Permite que o texto quebre em telas menores */
    }
  }
`;
