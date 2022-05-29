import { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";

//prop {children} is an array of objects -> [{group:'groupOne',comp:<Child/>},...]
function Fader({ children, activeGroup }) {
  const [active, setActive] = useState("groupOne");
  const [newActive, setNewActive] = useState(0);

  useEffect(() => {
    // const groups = console.log(groups);
    // const index = children.indexOf(
    //   (child) => child.props.group === activeGroup
    // );
    // console.log(index);
    setNewActive(activeGroup);
    setActive(null);
  }, [activeGroup]);

  const transition = useTransition(active, {
    key: activeGroup?.key,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 },
    onRest: () => active === null && setActive(newActive),
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
