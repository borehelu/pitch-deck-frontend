import React, { useEffect, useState } from "react";
import Idea from "./Idea";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem;
`;

const url = "http://localhost:5000/api/v1/ideas/";
const configuration = {
  headers: {
    authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkhlbHUgQm9yZSIsImxhc3ROYW1lIjoiIiwiaWF0IjoxNjY4MDExMTk3LCJleHAiOjE2NjgwOTc1OTd9.N-Wx1ChMK8B7jKqD0f4kcQo53SKmUsEcikbiiXQUIVw`,
  },
};

const fetchIdeas = async () => {
  let res = await fetch(url, configuration);
  let json = await res.json();

  if (json.status === "Success") {
    return json.data;
  }
};

function Feed() {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    fetchIdeas()
      .then((ideas) => {
        console.log(ideas);
        setIdeas(ideas);
      })
      .catch(console.error());
  }, []);

  return (
    <Wrapper>
      {ideas.map((idea) => (
        <Idea idea={idea} />
      ))}
    </Wrapper>
  );
}

export default Feed;
