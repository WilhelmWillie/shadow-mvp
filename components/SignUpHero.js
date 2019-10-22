import { useState, useRef } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "./Button";
import Container from "./Container";

// Encode -- used to turn JSON object into encoded URI
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const SignUpHero = ({ title, subtitle, formName }) => {
  const [subscribed, setSubscribed] = useState(false);
  const emailRef = useRef(null);

  const submitEmail = async e => {
    e.preventDefault();

    if (subscribed || emailRef.current.value.trim() === "") {
      return;
    }

    const serializedBody = encode({
      "form-name": formName,
      "bot-field": "",
      email: emailRef.current.value
    });

    await fetch(e.target.action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: serializedBody
    });

    setSubscribed(true);
  };

  return (
    <HeroWrapper>
      <HeroContainer>
        <Content>
          <ScrollAnimation animateIn="fadeIn">
            <HeroTitle>{title}</HeroTitle>
            <Subtitle>{subtitle}</Subtitle>

            <Email
              name={formName}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={submitEmail}
            >
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                ref={emailRef}
              />
              <Button type="submit">Sign Up</Button>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value={formName} />
            </Email>

            {subscribed && (
              <FormSuccess>
                Your e-mail has been successfully submitted!
              </FormSuccess>
            )}
          </ScrollAnimation>
        </Content>
      </HeroContainer>
    </HeroWrapper>
  );
};

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

const Email = styled.form`
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

    @media screen and (max-width: 768px) {
      margin: 0 0 16px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSuccess = styled.p`
  color: #86dcea;
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  animation-name: fadeIn;
  animation-duration: 0.5s;
`;

export default SignUpHero;
