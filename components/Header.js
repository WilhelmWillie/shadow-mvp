import styled from "styled-components";

import Container from "./Container";

import ShadowLogo from "../assets/shadow_logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo src={ShadowLogo} />
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 32px;
  background: #ffffff;
  z-index: 1;
`;

const Logo = styled.img`
  height: 32px;
`;

export default Header;
