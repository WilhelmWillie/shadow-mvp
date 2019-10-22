import styled from "styled-components";

const Container = styled.div`
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  ${({ column }) =>
    column ? "flex-direction: column" : "flex-direction: row"};
`;

export default Container;
