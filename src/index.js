import * as React from "react";
import { arrayOf, object, string, number, bool, oneOfType } from "prop-types";
import lottie from "lottie-web";

const { useRef, useEffect, useState, useCallback } = React

const Lottie = ({
  eventListeners,
  options,
  height,
  width,
  isStopped,
  isPaused,
  speed,
  segments,
  direction,
  ariaRole,
  ariaLabel,
  isClickToPauseDisabled,
  title,
  style,
}) => {
  const el = useRef(null);
  const [_options, setOptions] = useState({});
  const [anim, setAnim] = useState(null);

  const registerEvents = (eventListeners, _anim = null) => {
    _anim = _anim === null ? anim : _anim;
    eventListeners?.forEach((eventListener) => {
      _anim?.addEventListener(
        eventListener?.eventName,
        eventListener?.callback
      );
    });
  };

  const deRegisterEvents = (eventListeners, _anim = null) => {
    _anim = _anim === null ? anim : _anim;
    eventListeners?.forEach((eventListener) => {
      console.log(eventListener);
      _anim?.removeEventListener(
        eventListener?.eventName,
        eventListener?.callback
      );
    });
  };

  const play = useCallback(() => {
    anim?.play();
  });

  const playSegments = useCallback(() => {
    anim?.playSegments(segments);
  }, [segments]);

  const stop = useCallback(() => {
    anim?.stop();
  });

  const destroy = useCallback(() => {
    anim?.destroy();
  });

  const handleClickToPause = () => {
    // The pause() method is for handling pausing by passing a prop isPaused
    // This method is for handling the ability to pause by clicking on the animation
    if (anim?.isPaused) {
      anim?.play();
    } else {
      anim?.pause();
    }
  };

  useEffect(() => {
    anim?.setSpeed(parseFloat(speed));
  }, [speed]);

  useEffect(() => {
    anim?.setDirection(direction);
  }, [direction]);

  const pause = useCallback(() => {
    if (isPaused && !anim?.isPaused) {
      anim?.pause();
    } else if (!isPaused && anim?.isPaused) {
      anim?.pause();
    }
  }, [isPaused]);

  useEffect(() => {
    const { loop, autoplay, segments } = options;
    setOptions(() => {
      const localOptions = {
        ...options,
        container: el?.current,
        renderer: "svg",
        loop: loop !== false,
        autoplay: autoplay !== false,
        segments: segments !== false,
      };
      const _anim = lottie.loadAnimation(localOptions);
      setAnim(_anim);
      registerEvents(eventListeners, _anim);
      return localOptions;
    });

    return () => {
      deRegisterEvents(eventListeners);
      destroy();
      setOptions({});
      setAnim(null);
    };
  }, []);

  useEffect(() => {
    if (anim !== null) {
      if (isStopped) {
        stop();
      } else if (segments) {
        playSegments();
      } else {
        play();
      }
      pause();
    }
  }, [anim, isStopped, isPaused, segments]);

  useEffect(() => {
    if (Object.keys(_options).length > 0) {
      const localOptions = JSON.stringify(_options.animationData);
      const propsOptions = JSON.stringify(options.animationData);
      if (propsOptions !== localOptions) {
        deRegisterEvents(eventListeners);
        destroy();
        setOptions(() => {
          const localOptions = {
            ..._options,
            ...options,
          };
          const _anim = lottie.loadAnimation(localOptions);
          setAnim(_anim);
          registerEvents(eventListeners, _anim);
          return localOptions;
        });
      }
    }
  }, [options, _options, eventListeners]);

  const getSize = (initial) => {
    let size;

    if (typeof initial === "number") {
      size = `${initial}px`;
    } else {
      size = initial || "100%";
    }
    return size;
  };

  const lottieStyles = {
    width: getSize(width),
    height: getSize(height),
    overflow: "hidden",
    margin: "0 auto",
    outline: "none",
    ...style,
  };

  const onClickHandler = isClickToPauseDisabled
    ? () => null
    : handleClickToPause;

  return (
    <div
      ref={el}
      style={lottieStyles}
      onClick={onClickHandler}
      title={title}
      role={ariaRole}
      aria-label={ariaLabel}
      tabIndex="0"
    />
  );
}

Lottie.propTypes = {
  eventListeners: arrayOf(object),
  options: object.isRequired,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
  isStopped: bool,
  isPaused: bool,
  speed: oneOfType([string, number]),
  segments: arrayOf(number),
  direction: number,
  ariaRole: string,
  ariaLabel: string,
  isClickToPauseDisabled: bool,
  title: string,
  style: string,
};

Lottie.defaultProps = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
  ariaRole: "button",
  ariaLabel: "animation",
  isClickToPauseDisabled: false,
  title: "",
};

export default Lottie