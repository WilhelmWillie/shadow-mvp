import styled from "styled-components";

import Container from "./Container";

const Footer = () => (
  <FooterWrapper>
    <Container>
      <p>Shadow &copy; 2019.</p>
    </Container>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  background: #fafafa;
  padding: 100px 0 120px;
  text-align: center;

  p {
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
    font-size: 18px;
  }
`;

export default Footer;
