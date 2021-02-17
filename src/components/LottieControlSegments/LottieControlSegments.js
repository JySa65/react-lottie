import * as React from "react";
import Lottie from "../../index";
import animationDataA from "../../lotties/pinjump.json";
import animationDataB from "../../lotties/TwitterHeart.json";

const { useState } = React;

export default function LottieControlSegment() {
  const [state, setState] = useState({
    isStopped: false,
    isPaused: false,
    speed: 1,
    direction: 1,
    isDataA: true,
    startFrame: 0,
    endFrame: 50,
  });

  const centerStyle = {
    display: "block",
    margin: "10px auto",
    textAlign: "center",
  };
  const {
    isStopped,
    isPaused,
    direction,
    speed,
    isDataA,
    startFrame,
    endFrame,
  } = state;
  const defaultOptions = {
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
        segments={[startFrame, endFrame]}
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
      <p style={centerStyle}>
        Segment range: [{startFrame}, {endFrame}]
      </p>
      <div style={centerStyle}>
        <input
          type="text"
          value={startFrame}
          onChange={(e) =>
            setState({
              ...state,
              startFrame: parseInt(e.currentTarget.value, 10) || 0,
            })
          }
        />
        <input
          type="text"
          value={endFrame}
          onChange={(e) =>
            setState({
              ...state,
              endFrame: parseInt(e.currentTarget.value, 10) || 0,
            })
          }
        />
      </div>
    </div>
  );
}
