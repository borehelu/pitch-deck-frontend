import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Feed from "../components/Feed";
import NewIdea from "../components/NewIdea";
import styled from "styled-components";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const Top = styled.div`
  margin: 1rem;
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;
  
  `;
  const FilterBtn = styled.button`
    padding: 0.8rem 1.6rem;
    display: flex;
    column-gap: 0.6rem;
    border-radius: 0.5rem;
    border: none;
    background: #fff;
    font-weight: 700;
    color: #555;
    cursor: pointer;
    transition: .1s;
    &:hover{
      box-shadow: 1px 5px 12px rgba(0,0,0,0.1);
    }
  `;

  const NewIdeaBtn = styled.button`
    padding: 0.8rem 1.6rem;
    display: flex;
    column-gap: 0.6rem;
    border-radius: 0.5rem;
    border: none;
    background: #720026;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: .1s;
    &:hover{
      box-shadow: 1px 5px 12px rgba(0,0,0,0.1);
    }
  `;
  return (
    <>
      <Navigation />
      <Top>
        <FilterBtn>
          <i class="bx bx-filter-alt"></i>
          Filter
        </FilterBtn>
        <NewIdeaBtn onClick={()=>setIsVisible(!isVisible)}>
          <i class="bx bx-plus"></i>
          New idea
        </NewIdeaBtn>
      </Top>
      <Feed />
      <NewIdea isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  );
}

export default Home;
