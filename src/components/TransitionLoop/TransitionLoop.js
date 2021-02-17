import * as React from "react";
import Lottie from "../../index";
import animationDataA from "../../lotties/TwitterHeart.json";
import animationDataB from "../../lotties/beating-heart.json";

/**
 * TransitionLoop, demonstrates the use of the eventListener Props.
 * NOTE: there appears to currently be a bug in either
 * react-lottie or lottie-web which results in a chance of the loop option not
 * taking effect accross different animations.
 */

const { useState } = React;

export default function TransitionLoop() {
  const [isTransitioned, setIsTransitioned] = useState(false);

  const transition = () => {
    setIsTransitioned(true);
  };

  const clickHandler = () => {
    setIsTransitioned(false);
  };

  const centerStyle = {
    display: "block",
    margin: "10px auto",
    textAlign: "center",
  };
  const defaultOptions = {
    animationData: !isTransitioned ? animationDataA : animationDataB,
    loop: true,
    autoplay: true,
  };
  console.log(defaultOptions.animationData);

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        eventListeners={
          !isTransitioned
            ? [
                {
                  eventName: "loopComplete",
                  callback: () => transition(),
                },
              ]
            : []
        }
      />
      <button style={centerStyle} onClick={clickHandler}>
        restart
      </button>
    </div>
  );
}
