import React from "react";
import styled from "styled-components";
import SocialCard from "./components/SocialCard/SocialCard";
import "./normalize.css";
import "./App.css";

const Container = styled.div`
  width: 500px;
`;

const App = () => (
  <div className="App">
    <Container>
      <SocialCard />
    </Container>
  </div>
);

export default App;
