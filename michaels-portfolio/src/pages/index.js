import * as React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #353137;
  }

  body {
    margin: 0;
  }
`;

const MainPage = styled.nav`
  background-color: #353137;
`;

// markup
const IndexPage = () => {
  return (
    <MainPage>
      <GlobalStyle />
      <title>Michael Webb's Portfolio</title>
      <Navbar />
    </MainPage>
  );
};

export default IndexPage;
