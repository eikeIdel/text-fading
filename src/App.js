import "./App.css";
import React, { useState } from "react";
import TextOne from "./components/TextOne";
import TextTwo from "./components/TextTwo";
import TextThree from "./components/TextThree";
import Fader from "./components/Fader";

function App() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="button-container">
          <button className="buttons" onClick={() => setActiveGroup(0)}>
            First
          </button>
          <button className="buttons" onClick={() => setActiveGroup(1)}>
            Second
          </button>
          <button className="buttons" onClick={() => setActiveGroup(2)}>
            Third
          </button>
        </div>
        <Fader activeGroup={activeGroup}>
          {[<TextOne />, <TextTwo />, <TextThree />]}
        </Fader>
      </div>
    </div>
  );
}

export default App;
