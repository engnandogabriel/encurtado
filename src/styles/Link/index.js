import styled from "styled-components";

export const LinkStyled = styled.div`
  display: flex;
  width: 84px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #1a80e5;
  color: #f7fafc;
  border-radius: 12px;
  cursor: pointer;

  a {
    color: #f7fafc;
  }
  &:hover {
    background: #4f7396;
  }
`;
