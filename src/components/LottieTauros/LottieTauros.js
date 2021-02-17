import * as React from "react";
import Lottie from "../../index";
import animationDataA from "../../lotties/tauros.json";

const { useState } = React;

export default function LottieControlSegment() {
  const [state, setState] = useState({
    speed: 0.5,
    width: 100,
    height: 100,
  });

  const centerStyle = {
    display: "block",
    margin: "10px auto",
    textAlign: "center",
  };

  const centerStyleFlex = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const { direction, speed, width, height } = state;

  const defaultOptions = {
    animationData: animationDataA,
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        speed={speed}
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
        Width and height: [{width}, {height}]
      </p>

      <div style={centerStyleFlex}>
        <p>Width:</p>
        <input
          type="text"
          value={width}
          onChange={(e) =>
            setState({
              ...state,
              width: parseInt(e.currentTarget.value, 10) || 0,
            })
          }
        />
      </div>
      <div style={centerStyleFlex}>
        <p>Height:</p>
        <input
          type="text"
          value={height}
          onChange={(e) =>
            setState({
              ...state,
              height: parseInt(e.currentTarget.value, 10) || 0,
            })
          }
        />
      </div>
    </div>
  );
}
