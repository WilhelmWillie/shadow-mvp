import styled from "styled-components";

import Button from "./Button";
import Container from "./Container";

import ShadowLogo from "../assets/shadow_logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <a href="/">
          <Logo src={ShadowLogo} />
        </a>

        <Button as="a" href="/host" small darker>
          Sign Up to Host
        </Button>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 32px;
  background: #ffffff;
  z-index: 1;
`;

const HeaderContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 32px;
`;

export default Header;
