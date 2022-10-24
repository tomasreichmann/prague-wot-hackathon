import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type TextProps = React.PropsWithChildren<{
  fadeIn?: boolean;
  fadeOut?: boolean;
  duration: number;
  Component?: React.ComponentType<{ style: React.CSSProperties }>;
}>;

const H2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 {...props} />
);

export default function Text({ children, Component = H2 }: TextProps) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scale = spring({
    fps,
    frame,
    config: {
      stiffness: 100,
    },
    durationInFrames: 20,
  });

  const fadeInDuration = 30;

  const fadeInStrength = interpolate(
    spring({
      frame,
      fps,
      from: 0,
      to: fadeInDuration,
      config: { stiffness: 100, damping: 100 },
    }),
    [0, fadeInDuration],
    [0, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  const scaleMerged = Math.max(fadeInStrength);
  const blur = (1 - scaleMerged) * 50;
  return (
    <Component
      style={{
        transform: `scale(${scaleMerged})`,
        filter: `blur(${blur}px)`,
        fontSize: "inherit",
      }}
    >
      {children}
    </Component>
  );
}
