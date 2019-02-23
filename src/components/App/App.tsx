import React from "react";
import SocialCard from "../SocialCard";
import "./App.css";

import data from "../../data";

const App = () => (
  <div className="App">
    <SocialCard {...data[0]} />
  </div>
);

export default App;
