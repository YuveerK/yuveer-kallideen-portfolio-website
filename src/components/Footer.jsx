import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Created by <span>Yuveer Kallideen</span>
      </p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  background-color: #251c55;
  position: absolute;
  left: 0;
  padding: 40px;
  p {
    color: white;
    font-size: 1.4rem;

    span {
      color: #7373fc;
      font-size: 1.6rem;
    }
  }
`;

export default Footer;
