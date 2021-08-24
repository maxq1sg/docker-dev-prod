import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Transition = () => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }, []);
  return (
    <>
      <CSSTransition
        in={showMessage}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: "circle-show",
          enterDone: "circle-rotate",
          exitActive: "circle-hide",
        }}
      >
        <div className="circle"></div>
      </CSSTransition>
    </>
  );
};

export default Transition;
