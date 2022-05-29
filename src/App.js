import "./App.css";
import React, { useState } from "react";
import TextOne from "./components/TextOne";
import TextTwo from "./components/TextTwo";
import TextThree from "./components/TextThree";
import Fader from "./components/Fader";
import PicOne from "./asses/picOne.jpg";
import PicTwo from "./asses/picTwo.jpg";
import PicThree from "./asses/picThree.jpg";

function App() {
  const [activeGroup, setActiveGroup] = useState("groupOne");

  return (
    <div className="App">
      <div className="wrapper">
        <div className="button-container">
          <button
            className="buttons"
            onClick={() => setActiveGroup("groupOne")}
          >
            First
          </button>
          <button
            className="buttons"
            onClick={() => setActiveGroup("groupTwo")}
          >
            Second
          </button>
          <button
            className="buttons"
            onClick={() => setActiveGroup("groupThree")}
          >
            Third
          </button>
        </div>
        <Fader activeGroup={activeGroup}>
          {[
            <TextOne group="groupOne" key="groupOne" />,
            <TextTwo group="groupTwo" key="groupTwo" />,
            <TextThree group="groupThree" key="groupThree" />,
          ]}
        </Fader>
        <Fader activeGroup={activeGroup}>
          {[
            <img
              src={PicOne}
              alt="oen"
              key="groupOne"
              group="groupOne"
              width="100%"
            />,
            <img
              src={PicTwo}
              alt="Twon"
              key="groupTwo"
              group="groupTwo"
              width="100%"
            />,
            <img
              src={PicThree}
              alt="Three"
              key="groupThree"
              group="groupThree"
              width="100%"
            />,
          ]}
        </Fader>
      </div>
    </div>
  );
}

export default App;
