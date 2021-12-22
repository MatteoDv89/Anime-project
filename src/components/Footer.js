import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <span>
          &copy; MatteoDev89 || This is a portfolio's project, all videos
          provide from an tiers-server
        </span>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgb(0, 0, 0, 0.95);
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
 

  width: 100vw;
  color: rgb(255, 117, 20);
  font-size: 0.6em;
`;
export default Footer;
