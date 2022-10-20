import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import "./HackatonIntroComposition.css";

export type TextProps = React.PropsWithChildren<{
  fadeIn?: boolean;
  fadeOut?: boolean;
  duration: number;
}>;

export default function Text({
  children,
  duration,
  fadeIn = true,
  fadeOut = false
}: TextProps) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scale = spring({
    fps,
    frame,
    config: {
      stiffness: 100
    },
    durationInFrames: 20
  });

  const fadeInDuration = 30;

  const fadeInStrength = interpolate(
    spring({
      frame,
      fps,
      from: 0,
      to: fadeInDuration,
      config: { stiffness: 100, damping: 100 }
    }),
    [0, fadeInDuration],
    [0, 1],
    {
      extrapolateRight: "clamp"
    }
  );

  const scaleEnd =
    1 -
    spring({
      fps,
      frame: Math.max(frame - (40 - 20), 0),
      config: {
        stiffness: 100
      },
      durationInFrames: 20
    });
  const scaleMerged = Math.max(fadeInStrength);
  const blur = (1 - scaleMerged) * 50;
  return (
    <h1
      style={{ transform: `scale(${scaleMerged})`, filter: `blur(${blur}px)` }}
    >
      {children}
    </h1>
  );
}
