import { Composition } from "remotion";
import HackathonIntroComposition from "./HackathonIntroComposition";
export const fps = 30;
export const durationInFrames = fps * 48;
const isLandscape = true;
const width = 1920;
const height = 1080;
export default function HackathonIntroVideo() {
  return (
    <>
      <Composition
        id="Hackathon"
        component={HackathonIntroComposition}
        durationInFrames={durationInFrames}
        fps={30}
        width={isLandscape ? width : height}
        height={isLandscape ? height : width}
      />
    </>
  );
}
