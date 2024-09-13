import styled from "styled-components";

export const ButtonStyles = styled.button`
  width: 480px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
  border: 0;
  outline: none;
  border-radius: 12px;
  background: #1a80e5;
  color: #f7fafc;
  padding: 16px;
  cursor: pointer;
  &:hover {
    background: #4f7396;
  }
`;

export const ButtonMobile = styled.button`
  background-color: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  cursor: pointer;
  padding: 0;

  &:focus,
  &:hover,
  .menuMobileActive {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px #4f7396;
    border-color: #1a80e5;
    color: #1a80e5;
  }

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0px 6px currentColor, 0px -6px currentColor;
    transition: 0.2s;
  }
`;
