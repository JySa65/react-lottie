# Lottie Animation View for React

[![npm version](https://badge.fury.io/js/react-lottie.svg)](http://badge.fury.io/js/react-lottie)

## Demo
https://chenqingspring.github.io/react-lottie

## Wapper of bodymovin.js

[bodymovin](https://github.com/bodymovin/bodymovin) is [Adobe After Effects](http://www.adobe.com/products/aftereffects.html) plugin for exporting animations as JSON, also it provide bodymovin.js for render them as svg/canvas/html.

## Why Lottie?

#### Flexible After Effects features
We currently support solids, shape layers, masks, alpha mattes, trim paths, and dash patterns. And we’ll be adding new features on a regular basis.

#### Manipulate your animation any way you like
You can go forward, backward, and most importantly you can program your animation to respond to any interaction.

#### Small file sizes
Bundle vector animations within your app without having to worry about multiple dimensions or large file sizes. Alternatively, you can decouple animation files from your app’s code entirely by loading them from a JSON API.

[Learn more](http://airbnb.design/introducing-lottie/) › http://airbnb.design/lottie/

Looking for lottie files › https://www.lottiefiles.com/

## Installation

Install through npm:
```
npm install --save react-lotties
```

## Usage

```jsx
import * as React from "react";
import Lottie from "../index";
import animationDataA from "./pinjump.json";
import animationDataB from "./TwitterHeart.json";

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
      preserveAspectRatio: 'xMidYMid slice'
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

```

### props
The `<Lottie />` Component supports the following components:

**options** *required*

the object representing the animation settings that will be instantiated by bodymovin. Currently a subset of the bodymovin options are supported:

>**loop** *options* [default: `false`]
>
>**autoplay** *options* [default: `false`]
>
>**animationData** *required*
>
>**rendererSettings** *required* 

**width** *optional* [default: `100%`]

pixel value for containers width.

**height** *optional* [default: `100%`]

pixel value for containers height.

**eventListeners** *optional* [default: `[]`]

This is an array of objects containing a `eventName` and `callback` function that will be registered as  eventlisteners on the animation object. refer to [bodymovin#events](https://github.com/bodymovin/bodymovin#events) where the mention using addEventListener, for a list of available custom events.

example:
```jsx
eventListeners=[
  {
    eventName: 'complete',
    callback: () => console.log('the animation completed:'),
  },
]
```
## Contribution
Your contributions and suggestions are heartily welcome.

## License
MIT

