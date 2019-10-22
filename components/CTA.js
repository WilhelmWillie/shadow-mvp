import styled from "styled-components";

import Button from "./Button";
import Container from "./Container";

const CTA = () => (
  <Container>
    <CTAWrapper>
      <h2>Interested?</h2>
      <p>Sign up for a Shadow tour now! Available at USC, now.</p>

      <Options>
        <Button as="a" href="/shadow">
          Sign Up for a Tour
        </Button>

        <span>OR</span>

        <Button as="a" href="/host">
          Become a Host
        </Button>
      </Options>
    </CTAWrapper>
  </Container>
);

const CTAWrapper = styled.div`
  padding: 64px;
  border-radius: 32px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  width: 100%;
  margin-bottom: 64px;
  text-align: center;

  p {
    margin-top: 16px;
    font-size: 20px;
    margin-bottom: 64px;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    span {
      margin: 18px 0;
    }
  }
`;

export default CTA;
