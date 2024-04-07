import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  font-family: "Barlow Condensed", sans-serif;
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  margin-right: 10px;
`;

const DefaultButton = styled(BaseButton)`
  background-color: #7a6874;
  color: #fff;

  &:hover {
    background-color: #3e343a;
  }
`;

const SuccessButton = styled(BaseButton)`
  background-color: #336e41;
  color: #fff;

  &:hover {
    background-color: #1e4c28;
  }
`;

const ErrorButton = styled(BaseButton)`
  background-color: #d75663;
  color: #fff;

  &:hover {
    background-color: #bd3a47;
  }
`;

const WarningButton = styled(BaseButton)`
  background-color: #f1c542;
  color: #333;

  &:hover {
    background-color: #dba400;
  }
`;

const InfoButton = styled(BaseButton)`
  background-color: #17a2b8;
  color: #fff;

  &:hover {
    background-color: #128293;
  }
`;

const Button = ({ type, children, ...rest }) => {
  switch (type) {
    case "success":
      return <SuccessButton {...rest}>{children}</SuccessButton>;
    case "error":
      return <ErrorButton {...rest}>{children}</ErrorButton>;
    case "warning":
      return <WarningButton {...rest}>{children}</WarningButton>;
    case "info":
      return <InfoButton {...rest}>{children}</InfoButton>;
    default:
      return <DefaultButton {...rest}>{children}</DefaultButton>;
  }
};

export default Button;
