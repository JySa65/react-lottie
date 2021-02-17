import * as React from "react";
import Lottie from "../../index";
import animationDataA from "../../lotties/pinjump.json";
import animationDataB from "../../lotties/TwitterHeart.json";

const { useState } = React;

export default function LottieControl() {
  const [state, setState] = useState({
    isStopped: false,
    isPaused: false,
    speed: 1,
    direction: 1,
    isDataA: true,
  });
  const centerStyle = {
    display: "block",
    margin: "10px auto",
    textAlign: "center",
  };
  const { isStopped, isPaused, direction, speed, isDataA } = state;
  const defaultOptions = {
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: isDataA ? animationDataA : animationDataB,
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
        speed={speed}
        direction={direction}
      />

      <p style={centerStyle}>Speed: x{speed}</p>
      <input
        style={centerStyle}
        type="range"
        value={speed}
        min="0"
        max="3"
        step="0.5"
        onChange={(e) => setState({ ...state, speed: e.currentTarget.value })}
      />
      <button
        style={centerStyle}
        onClick={() => setState({ ...state, isStopped: true })}
      >
        stop
      </button>
      <button
        style={centerStyle}
        onClick={() => setState({ ...state, isStopped: false })}
      >
        play
      </button>
      <button
        style={centerStyle}
        onClick={() => setState({ ...state, isPaused: !isPaused })}
      >
        pause
      </button>
      <button
        style={centerStyle}
        onClick={() => setState({ ...state, direction: direction * -1 })}
      >
        change direction
      </button>
      <button
        style={centerStyle}
        onClick={() => setState({ ...state, isDataA: !isDataA })}
      >
        toggle animation
      </button>
    </div>
  );
}
