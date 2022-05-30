import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";

//prop {children} is an array of objects -> [{group:'groupOne',comp:<Child/>},...]
function Fader({ children, activeGroup }) {
  const [active, setActive] = useState("groupOne");

  useEffect(() => {
    //set first active = null to fade out previous element.
    setActive(null);
  }, [activeGroup]);

  const transition = useTransition(active, {
    key: activeGroup.key,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 },
    //after previous element is faded out (with active == null),
    //start animation again for the next element (active = activeGroup)
    onRest: () => active === null && setActive(activeGroup),
  });

  return (
    <div>
      {transition((style, item) => (
        <animated.div
          style={{
            ...style,
          }}
        >
          {children[children.map((child) => child.props.group).indexOf(item)]}
        </animated.div>
      ))}
    </div>
  );
}

export default Fader;
