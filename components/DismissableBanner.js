import { useState } from "react";
import styled from "styled-components";

import Container from "./Container";

const DismissableBanner = () => {
  const [visible, setVisible] = useState(true);

  const hideBanner = () => {
    setVisible(false);
  };

  return (
    visible && (
      <Wrapper>
        <BannerContainer>
          <p>Now available at the University of Southern California</p>
          <Close onClick={hideBanner}>&times;</Close>
        </BannerContainer>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 48px;
  background: rgba(0, 0, 0, 0.95);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    padding: 24px 0;
  }
`;

const BannerContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Close = styled.div`
  font-size: 32px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-top: 16px;
    content: "Dismiss Banner";
  }
`;

export default DismissableBanner;
