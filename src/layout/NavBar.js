import React from "react";
import styled from "styled-components";
// components
import LocationBar from "./components/LocationBar";
import DateList from "./components/DateList";

// styled components
const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 1;
`;

const NavBar = () => {
  return (
    <NavBarContainer id="navbar">
      <LocationBar />
      <DateList />
    </NavBarContainer>
  );
};

export default NavBar;
