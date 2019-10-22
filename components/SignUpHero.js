import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "./Button";
import Container from "./Container";

const SignUpHero = ({ title, subtitle }) => (
  <HeroWrapper>
    <HeroContainer>
      <Content>
        <ScrollAnimation animateIn="fadeIn">
          <HeroTitle>{title}</HeroTitle>
          <Subtitle>{subtitle}</Subtitle>

          <Email>
            <input type="email" placeholder="Your Email" />
            <Button>Sign Up</Button>
          </Email>
        </ScrollAnimation>
      </Content>
    </HeroContainer>
  </HeroWrapper>
);

const HeroWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;
`;

const HeroContainer = styled(Container)`
  position: relative;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
`;

const HeroTitle = styled.h1`
  margin-bottom: 16px;
  line-height: 40px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 36px;
`;

const Email = styled.div`
  width: 100%;
  display: flex;

  input {
    flex-grow: 1;
    border-radius: 999px;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-right: 32px;
    padding: 18px 32px;
    font-size: 18px;
    color: #818181;
  }
`;

export default SignUpHero;
