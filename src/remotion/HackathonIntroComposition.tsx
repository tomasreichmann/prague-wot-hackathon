import {
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
  Sequence,
  Audio,
  staticFile,
} from "remotion";
import "./HackathonIntroComposition.css";
import LogoAnimated from "./LogoAnimated";
import JoinNow from "./JoinNow";
import TextSequence, { getSequenceLength } from "./TextSequence";

const pause = Array(10).fill(" ").join("");

const introTextSequence = [
  // "Hey...",
  // "Hey... You!",
  "Are you tired from COPY & PASTE the whole day?!",
  // "Do you have an awesome idea that you don't have time for?",
  // "Do you have an awesome idea that you don't have time for?",
  // "Do you want to make the game better?",
  // "How about building a dream-team and do something cool together?",
  "We have just the thing for you..." + pause,
  // "Prague World of Tanks Hackathon 2022"
];

const mainTextSequence = [
  "21st to 25th of November",
  "3 uninterrupted days of hacking and 1 day of celebration",
  "We need devs,|" +
    pause +
    "designers,|" +
    pause +
    "QA,|" +
    pause +
    "managers...",
  "We need you!",
  "Anybody from World of Tanks Prague can join|(incl. remote people)",
  "You can make teams of about 6 people or even go solo",
  "The topic is:",
  "Make World of Tanks|Great Again!",
  //"improvements, fixes,|updates, new features,|visual and content updates",
  //"Your fantasy is the limit",
  "There will be cool prizes for all participants",
  "and a super-special prize for the winning team",
  "The winners will be selected by your votes",
  //"We will give you maximum support. ",
  "Let us know what you need to join",
  "Food, Accommodation, Travel expenses?",
];

export default function HackathonIntroComposition() {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const defaultFramesPerCharacter = Math.floor(fps / 30);
  const defaultSequenceDelay = Math.floor(1.25 * fps);

  const introTextSequenceDuration = getSequenceLength(
    introTextSequence,
    defaultFramesPerCharacter,
    defaultSequenceDelay
  );
  const mainTextSequenceDuration =
    getSequenceLength(
      mainTextSequence,
      defaultFramesPerCharacter,
      defaultSequenceDelay
    ) + 30;

  const logoFrom = introTextSequenceDuration;
  const logoDuration = fps * 3;
  const mainTextSequenceFrom = introTextSequenceDuration + logoDuration;
  const mainTextSequenceTo = mainTextSequenceFrom + mainTextSequenceDuration;

  const joinSequenceFrom = mainTextSequenceTo;
  return (
    <>
      <Audio src={staticFile("Hackathon.wav")} />
      <Sequence from={0} durationInFrames={10}>
        <AbsoluteFill className="Frame">
          <p className="title">HACKATHON Announcement</p>
        </AbsoluteFill>
      </Sequence>
      <TextSequence
        textSequence={introTextSequence}
        from={1}
        to={introTextSequenceDuration}
        framesPerCharacter={defaultFramesPerCharacter}
        sequenceDelay={defaultSequenceDelay}
      />
      <Sequence from={logoFrom} durationInFrames={logoDuration}>
        <LogoAnimated durationInFrames={logoDuration} />
      </Sequence>
      <TextSequence
        textSequence={mainTextSequence}
        from={mainTextSequenceFrom}
        to={mainTextSequenceTo}
      />
      <Sequence from={joinSequenceFrom}>
        <AbsoluteFill className="Frame">
          <JoinNow duration={durationInFrames - joinSequenceFrom} />
        </AbsoluteFill>
      </Sequence>
      {frame}|{joinSequenceFrom}
    </>
  );
}
