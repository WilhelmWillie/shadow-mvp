import styled from "styled-components";

const Button = styled.button`
  color: #ffffff;
  padding: 18px 32px;
  background: #7d83c7;
  border-radius: 999px;
  font-size: 18px;
  border: none;
  transition: 0.25s background;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #989dd8;
  }

  ${({ small }) =>
    small &&
    `
      padding: 14px 24px;
      font-size: 14px;
    `}

  ${({ darker }) =>
    darker &&
    `
      background: #5D629F;

      &:hover {
        background: #434888;
      }
    `}
`;

export default Button;
