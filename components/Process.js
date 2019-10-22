import styled from "styled-components";

import Container from "./Container";

const Process = () => (
  <ProcessWrapper>
    <Container column>
      <ProcessHeader>How Shadow Works</ProcessHeader>

      <Step>
        <h3>1) Sign up for Shadow</h3>

        <p>
          Let us know you're interested in Shadow so we can reach out to you for
          further steps
        </p>
      </Step>

      <Step>
        <h3>2) Tell us about yourself</h3>

        <p>
          Once we've reached out to you, tell us more about yourself, your
          availability, and the experience you want
        </p>
      </Step>

      <Step>
        <h3>3) Get matched with a student</h3>

        <p>
          We'll find students that match your wants and availability, allowing
          you to pick your match and get in contact.
        </p>
      </Step>

      <Step>
        <h3>4) Visit campus!</h3>

        <p>
          Once a date is set, meet up with your host on campus and enjoy your
          campus experience!
        </p>
      </Step>
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

const Step = styled.div``;

export default Process;
