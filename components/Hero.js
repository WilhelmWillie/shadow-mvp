import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "./Button";
import Container from "./Container";

import HeroGraphic from "../assets/conversation.svg";

const Hero = () => (
  <HeroWrapper>
    <HeroContainer>
      <Content>
        <ScrollAnimation animateIn="slideInLeft">
          <HeroTitle>
            Real students.
            <br />
            Real voices.
            <br />
            Real experiences.
          </HeroTitle>
          <Subtitle>
            Experience what it's really like to be a college student.
          </Subtitle>
          <Button as="a" href="/shadow">
            Sign Up For A Tour
          </Button>
        </ScrollAnimation>
      </Content>
      <Graphic>
        <ScrollAnimation animateIn="fadeIn" delay={750}>
          <GraduationGraphicImg src={HeroGraphic} />
        </ScrollAnimation>
      </Graphic>
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 45%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: 16px;
  line-height: 40px;
`;

const Subtitle = styled.p`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 32px;
  line-height: 36px;
`;

const Graphic = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  z-index: -1;

  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
    margin-top: 64px;
  }
`;

const GraduationGraphicImg = styled.img`
  width: 100%;
`;

export default Hero;
