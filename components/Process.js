import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import Container from "./Container";

import Login from "../assets/login.svg";
import Campus from "../assets/graduation.svg";
import Diary from "../assets/diary.svg";
import Filter from "../assets/filter.svg";

const Process = () => (
  <ProcessWrapper>
    <Container column>
      <ProcessHeader>How Shadow Works</ProcessHeader>

      <ScrollAnimation animateIn="fadeIn">
        <Step>
          <StepContent>
            <h3>1) Sign up for Shadow</h3>

            <p>
              Let us know you're interested in Shadow so we can reach out to you
              for further steps
            </p>
          </StepContent>

          <StepImage src={Login} />
        </Step>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Step>
          <StepImage src={Diary} />

          <StepContent>
            <h3>2) Tell us about yourself</h3>

            <p>
              Once we've reached out to you, tell us more about yourself, your
              availability, and the experience you want
            </p>
          </StepContent>
        </Step>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Step>
          <StepContent>
            <h3>3) Get matched with a student</h3>

            <p>
              We'll find students that match your wants and availability,
              allowing you to pick your match and get in contact.
            </p>
          </StepContent>

          <StepImage src={Filter} />
        </Step>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Step>
          <StepImage src={Campus} />

          <StepContent>
            <h3>4) Visit campus!</h3>

            <p>
              Once a date is set, meet up with your host on campus and enjoy
              your campus experience!
            </p>
          </StepContent>
        </Step>
      </ScrollAnimation>
    </Container>
  </ProcessWrapper>
);

const ProcessWrapper = styled.div`
  padding: 150px 0;
`;

const ProcessHeader = styled.h2`
  font-size: 36px;
  text-align: center;
`;

const Step = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  padding: 64px 0 0;
`;

const StepContent = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    line-height: 28px;
  }
`;

const StepImage = styled.img`
  width: 40%;
  margin-left: 48px;
  margin-right: 48px;
`;

export default Process;
