import * as React from "react";
import Lottie from "../../index";
import animationDataA from "../../lotties/TwitterHeart.json";

const { useState } = React;

export default function ToggleLike() {
  const [isStopped, setIsStopped] = useState(true);
  const [isLike, setIsLike] = useState(false);
  const [direction, setDirection] = useState(1);

  const centerStyle = {
    display: "block",
    margin: "10px auto",
    textAlign: "center",
  };

  const defaultOptions = {
    animationData: animationDataA,
    loop: false,
    autoplay: false,
  };

  const clickHandler = () => {
    if (!isStopped) {
      setDirection((prev) => prev * -1);
    }
    setIsStopped(false);
    setIsLike((prev) => !prev);
  };

  return (
    <div>
      {console.log(direction)}
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={false}
        speed={1}
        direction={direction}
      />
      <button style={centerStyle} onClick={clickHandler}>
        {isLike ? "unlike" : "like"}
      </button>
    </div>
  );
}
