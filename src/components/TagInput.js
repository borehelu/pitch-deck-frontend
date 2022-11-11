import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  border: 1px solid #ddd;
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 1rem;
  cursor: pointer;

  &.active {
    background-color: #720026;
    color: #fff;
    border: none;
  }
`;

function TagInput({ tag }) {
  return <InputContainer>{tag}</InputContainer>;
}

export default TagInput;
