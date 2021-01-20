import React from "react";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "./style/theme";
import CardList from "./layout/CardList";
import MenuType from "./layout/MenuType";
import Cart from "./layout/Cart";
import LocationModal from "./layout/LocationModal";
import NavBar from "./layout/NavBar";

const Container = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.DarkGray};
  width: 100%;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar />
        <MenuType />
        <CardList />
        <Cart />
        <LocationModal />
      </Container>
    </ThemeProvider>
  );
};

export default App;
