import React, { SVGAttributes, useRef } from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import Logo from "./Logo";

const LogoAnimated = ({
  durationInFrames,
  ...props
}: SVGAttributes<SVGSVGElement> & {
  durationInFrames: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const elementCount = 32;

  const uniqueClassName = useRef(
    Math.random().toString().replace("0.", "svg-")
  );

  const seeds = React.useMemo(() => {
    return Array(elementCount)
      .fill(null)
      .map((_, elementIndex) => {
        return [Math.random(), Math.random(), Math.random(), Math.random()];
      });
  }, []);

  const effectDuration = 30;
  // spring({ frame, fps })
  const rotateStrength = interpolate(
    spring({
      frame,
      fps,
      from: 0,
      to: effectDuration,
      config: { stiffness: 100, damping: 10 },
    }),
    [0, effectDuration],
    [1, 0]
  );
  const scaleStrength = interpolate(
    spring({
      frame,
      fps,
      from: 0,
      to: effectDuration,
      config: { stiffness: 100, damping: 100 },
    }),
    [0, effectDuration],
    [5, 1],
    {
      extrapolateRight: "clamp",
    }
  );
  const fadeDuration = 15;
  const fadeInStrength = interpolate(
    spring({
      frame,
      fps,
      from: 0,
      to: fadeDuration,
      config: { stiffness: 100, damping: 100 },
    }),
    [0, fadeDuration],
    [0, 1],
    {
      extrapolateRight: "clamp",
    }
  );
  const fadeOutStartFrame = effectDuration + 60;
  const fadeOutDuration = 15;
  const fadeOutStrength = interpolate(
    frame,
    [fadeOutStartFrame, fadeOutStartFrame + fadeOutDuration],
    [1, 0],
    {
      easing: Easing.bezier(0.8, 0.22, 0.96, 0.65),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill className={"Frame "}>
      <style scoped>
        {`.${uniqueClassName.current} {
      perspective: 500px;
      margin: 100px;
    }`}
        {Array(elementCount)
          .fill(null)
          .map((_, elementIndex) => {
            return `.${uniqueClassName.current}>:nth-child(${
              elementIndex + 1
            }) { rotate: ${seeds[elementIndex][0]} ${seeds[elementIndex][1]} ${
              seeds[elementIndex][2]
            } ${rotateStrength * 360 * 2}deg; scale: ${Math.max(
              scaleStrength,
              (1 - fadeOutStrength) * 5
            )}; transform-origin: center center; opacity: ${Math.min(
              fadeInStrength,
              fadeOutStrength
            )}; }`;
          })}
      </style>
      <Logo {...props} className={uniqueClassName.current} />
    </AbsoluteFill>
  );
};

export default LogoAnimated;
