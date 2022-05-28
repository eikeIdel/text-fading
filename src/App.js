import "./App.css";
import { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import TextOne from "./components/TextOne";
import TextTwo from "./components/TextTwo";
import TextThree from "./components/TextThree";

function App() {
  const [active, setActive] = useState(0);
  const [newActive, setNewActive] = useState(0);

  const [toggle, setToggle] = useState(true);

  // function handleClick(Nb) {
  //   const newState = { 0: false, 1: false, 2: false };
  //   newState[Nb] = true;
  //   setActive(newState);
  // }

  function handleClick(Nb) {
    setNewActive(Nb);
    setActive(null);
  }

  const transition = useTransition(active, {
    key: active?.key,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 },
    onRest: () => active === null && setActive(newActive),
  });

  const textComponents = [<TextOne />, <TextTwo />, <TextThree />];

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="button-container">
          <button className="buttons" onClick={() => handleClick(0)}>
            First
          </button>
          <button className="buttons" onClick={() => handleClick(1)}>
            Second
          </button>
          <button className="buttons" onClick={() => handleClick(2)}>
            Third
          </button>
        </div>
        {transition((style, i) => (
          <animated.div
            style={{
              ...style,
              // position: "absolute",
            }}
          >
            {textComponents[i]}
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
