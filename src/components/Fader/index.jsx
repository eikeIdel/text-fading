import { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";

//prop {children} is an array of components
function Fader({ children }, { activeGroup }) {
  const [active, setActive] = useState(0);
  const [newActive, setNewActive] = useState(0);

  useEffect(() => {
    setNewActive(activeGroup);
    setActive(null);
  }, [activeGroup]);

  const transition = useTransition(active, {
    key: active?.key,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 },
    onRest: () => active === null && setActive(newActive),
  });

  return (
    <>
      {transition((style, i) => (
        <animated.div
          style={{
            ...style,
          }}
        >
          {children[i]}
        </animated.div>
      ))}
    </>
  );
}

export default Fader;
