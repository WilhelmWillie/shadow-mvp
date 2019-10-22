import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import Container from "./Container";

const Benefits = () => (
  <BenefitsWrapper>
    <Container column>
      <Center>
        <BenefitsHeader>Standard college tours don't cut it.</BenefitsHeader>
        <p>
          They're cookie cutter, impersonal, and generic. You deserve to see the
          parts of college relevant to you.
          <br />
          <br />
          <b>That's where Shadow comes in.</b>
        </p>
      </Center>

      <BenefitColumns>
        <BenefitColumn>
          <ScrollAnimation animateIn="fadeIn">
            <h3>Real perspective</h3>
            <p>Get real, intimate perspective from a student just like you.</p>
          </ScrollAnimation>
        </BenefitColumn>

        <BenefitColumn>
          <ScrollAnimation animateIn="fadeIn" delay={150}>
            <h3>Personalized for you</h3>
            <p>
              Get tours customized to your personal desires and aspirations.
            </p>
          </ScrollAnimation>
        </BenefitColumn>

        <BenefitColumn>
          <ScrollAnimation animateIn="fadeIn" delay={300}>
            <h3>Credible students</h3>
            <p>Meet verified and trusted students, vetted by us.</p>
          </ScrollAnimation>
        </BenefitColumn>
      </BenefitColumns>
    </Container>
  </BenefitsWrapper>
);

const BenefitsWrapper = styled.div`
  background: #30292f;
  color: #ffffff;
  padding: 150px 0;
`;

const BenefitsHeader = styled.h2`
  margin-bottom: 32px;
`;

const Center = styled.div`
  text-align: center;
  width: 100%;
`;

const BenefitColumns = styled.div`
  width: 100%;
  display: flex;
  padding-top: 48px;
  justify-content: space-between;
`;

const BenefitColumn = styled.div`
  flex-basis: 32%;

  h3 {
    font-weight: 600;
    text-align: center;
    font-size: 20px;
    margin-bottom: 18px;
  }

  p {
    color: rgba(255, 255, 255, 0.75);
    line-height: 24px;
    text-align: center;
  }
`;

export default Benefits;
