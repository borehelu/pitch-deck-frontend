import React, { useState } from "react";
import styled from "styled-components";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import PasswordLink from "./pages/auth/PasswordLink";
import PasswordReset from "./pages/auth/PasswordReset";
import Home from "./pages/Home";

const Wrapper = styled.div`
position: relative;
`;



function App() {
  return (
    <Wrapper>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <PasswordLink /> */}
      {/* <PasswordReset /> */}
      <Home/>
      
    </Wrapper>
  );
}

export default App;
