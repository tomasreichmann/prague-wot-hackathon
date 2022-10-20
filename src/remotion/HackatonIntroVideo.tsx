import { Composition } from "remotion";
import HackatonIntroComposition from "./HackatonIntroComposition";
export const fps = 30;
export const durationInFrames = fps * 48;
export default function HackatonIntroVideo() {
  return (
    <>
      <Composition
        id="Intro"
        component={HackatonIntroComposition}
        durationInFrames={durationInFrames}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
}
