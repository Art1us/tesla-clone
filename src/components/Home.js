import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home({burgerStatus}) {
  return (
    <Container>
      <Section 
        burgerStatus={burgerStatus}
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
       burgerStatus={burgerStatus}
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        burgerStatus={burgerStatus}
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        burgerStatus={burgerStatus}
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        burgerStatus={burgerStatus}
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        burgerStatus={burgerStatus}
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        burgerStatus={burgerStatus}
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnTxt="Shop now now"
        
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index:1000;
`;
