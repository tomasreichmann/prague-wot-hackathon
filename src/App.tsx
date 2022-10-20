import HackatonIntroComposition from "./remotion/HackatonIntroComposition";
import { Player } from "@remotion/player";
import "./styles.css";
import { durationInFrames } from "./remotion/HackatonIntroVideo";

export default function App() {
  return (
    <div className="App">
      <Player
        component={HackatonIntroComposition}
        inputProps={{ text: "World" }}
        durationInFrames={durationInFrames}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        style={{
          width: "100vw"
        }}
        controls
      />
      <div className="board"></div>
    </div>
  );
}
