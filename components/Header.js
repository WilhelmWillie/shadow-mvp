import styled from "styled-components";

import Button from "./Button";
import Container from "./Container";

import ShadowLogo from "../assets/shadow_logo.png";

const Header = ({ shadowLink }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <a href="/">
          <Logo src={ShadowLogo} />
        </a>

        {shadowLink ? (
          <Button as="a" href="/shadow" small darker>
            Sign Up to Shadow
          </Button>
        ) : (
          <Button as="a" href="/host" small darker>
            Sign Up to Host
          </Button>
        )}
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
