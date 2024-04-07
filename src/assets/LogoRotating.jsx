import React from "react";
import styled, { keyframes } from "styled-components";
import logo_nadia from "./logo_nadia.svg";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  width: 200px;
  margin: 45px 0px;
  animation: ${rotateAnimation} 2s linear infinite;
`;
const LogoRotating = () => {
  return <Logo src={logo_nadia} alt="Logo Nadia" />;
};

export default LogoRotating;
