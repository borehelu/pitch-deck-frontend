import React from 'react'
import styled from 'styled-components'


const Navbar = styled.div`
background-color: #fff;
margin: 1rem;
padding: .7rem 1.5rem;
border-radius: .5rem;
box-shadow: 1px 3px 4px rgba(0,0,0,0.1);
display: flex;
justify-content: space-between;
align-items: center;
`;

const Logo = styled.h1`
    font-size: 1.2rem;
`;

const Right = styled.div`
display: flex;
align-items: center;
column-gap: 1rem;
& span{
    font-weight: 700;
}
`;

const UserAvatar = styled.div`
    background-color: #720026;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;

`;

function Navigation() {
  return (
    <Navbar>
        <Logo>Pitch Deck</Logo>
        <Right>
            <p>Welcome back <span> Helu Bore</span></p>
            <UserAvatar>HB</UserAvatar>
        </Right>
    </Navbar>
  )
}

export default Navigation