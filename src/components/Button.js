import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  display: block;
  padding: 0.6rem 1rem;
  width:${(props)=> props.maxwidth ? "100%" : ""};
  margin: 0.5rem 0;
  font-size: 1rem;
  border: ${(props) => (props.className ? "none" : "1px solid #ddd")};
  outline: none;
  border-radius: 0.3rem;
  color: ${(props) => (props.className ? "#fff" : "#333")};
  cursor: pointer;
  background-color: ${(props) => (props.className ? "#720026" : "transparent")};
`;

function Button(props) {
  return <ButtonStyled type={props.type} className={props.className}>{props.text}</ButtonStyled>;
}

export default Button;
