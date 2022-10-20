"Join now!|We have actual cookies!";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import "./HackatonIntroComposition.css";
import Text from "./Text";
import Typing from "./Typing";

export type JoinNowProps = React.PropsWithChildren<{ duration: number }>;

export default function JoinNow({ duration }: JoinNowProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const glowDelay = 30;
  const glowSize =
    ((Math.sin(
      interpolate(frame, [glowDelay, duration], [0, 3 * 2 * Math.PI], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
      })
    ) +
      1) /
      2) **
    2;
  const fadeOutSizeDuration = 20;
  const fadeOutScale = interpolate(
    frame,
    [duration - fadeOutSizeDuration, duration],
    [1, 0],
    {
      easing: Easing.bezier(1, 0, 1, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }
  );

  return (
    <div style={{ transform: "scale(" + fadeOutScale + ")" }}>
      <div
        style={{
          color: "#FFDD99",
          textShadow: `0px 0px ${
            glowSize * 50
          }px rgba(255, 127, 0, 0.25), 0px 0px ${
            glowSize * 50
          }px #FF2A00, 0px 0px 8px #EE5522`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${glowSize / 16 + 1})`
        }}
      >
        <Text duration={fps * 3}>JOIN NOW</Text>
      </div>
      <div style={{ fontSize: 80, fontWeight: "bold", minHeight: "2em" }}>
        <Typing from={30} framesPerCharacter={1}>
          We have actual cookies!
        </Typing>
      </div>
    </div>
  );
}
