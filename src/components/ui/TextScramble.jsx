'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}) {
  const MotionComponent = motion[Component] || motion.p;
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const text = children;

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        if (onScrambleComplete) {
            onScrambleComplete();
        }
      }
    }, speed * 1000);
  };

  useEffect(() => {
    let intervalId;
    if (trigger) {
        scramble();
    }
    return () => {
        if(intervalId) clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, children]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}

// PropTypes provide runtime type checking for props, which is a good practice in JSX.
TextScramble.propTypes = {
  /** The text content to scramble */
  children: PropTypes.string.isRequired,
  /** Total duration of the scramble animation in seconds */
  duration: PropTypes.number,
  /** The interval speed for each character update in seconds */
  speed: PropTypes.number,
  /** The set of characters to use for scrambling */
  characterSet: PropTypes.string,
  /** The HTML element type to render the component as */
  as: PropTypes.elementType,
  /** Additional CSS class name(s) */
  className: PropTypes.string,
  /** A boolean to trigger the animation */
  trigger: PropTypes.bool,
  /** Callback function when the scramble animation completes */
  onScrambleComplete: PropTypes.func,
};

