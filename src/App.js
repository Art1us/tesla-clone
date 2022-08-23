import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import styled from "styled-components";
import { Container } from "@mui/system";

function App() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <AppContainer burgerStatus={burgerStatus}>
      <Header burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
      <Home burgerStatus={burgerStatus}/>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align:center;
  width: 100vw;
  ${props=>props.burgerStatus && 'overflow:hidden'}
`