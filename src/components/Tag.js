import React from "react";
import styled from "styled-components";

const TagItem = styled.div`
  background-color: #f4f4f4;
  padding: 0.1rem 0.5rem;
  border-radius: 0.8rem;
  font-weight: 700;
  color: #555;
  font-size: 0.8rem;
`;

function Tag({ name }) {
  return (
    <TagItem>
      <p>{name}</p>
    </TagItem>
  );
}

export default Tag;
