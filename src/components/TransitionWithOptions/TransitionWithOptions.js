import * as React from "react";
import Lottie from "../../index";
import animationDataA from "../../lotties/TwitterHeart.json";
import animationDataB from "../../lotties/beating-heart.json";

/**
 * TransitionWithOptions: demonstrates how you can switch to a
 * new animation with different options. For example, you can start
 * with a looped animation and change to one that plays only once
 * without mounting the component again
 */

const { useState } = React;

export default function TransitionWithOptions() {
  const [state, setState] = useState({
    showLoopedAnimation: true,
  });
  const clickHandler = () => {
    setState({ showLoopedAnimation: !state.showLoopedAnimation });
  };
  const centerStyle = {
    display: "block",
    margin: "20px auto",
    textAlign: "center",
  };
  const { showLoopedAnimation } = state;
  const animationOptionsWithLoop = {
    animationData: animationDataA,
    loop: true,
  };
  const animationOptionsWithoutLoop = {
    animationData: animationDataB,
    loop: false,
  };

  return (
    <div>
      <Lottie
        options={
          showLoopedAnimation
            ? animationOptionsWithLoop
            : animationOptionsWithoutLoop
        }
        height={400}
        width={400}
      />
      <p style={centerStyle}>
        This animation is {showLoopedAnimation ? "looped" : "not looped"}
      </p>
      <button style={centerStyle} onClick={clickHandler}>
        switch
      </button>
    </div>
  );
}
