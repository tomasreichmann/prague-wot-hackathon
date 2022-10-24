import { AbsoluteFill, Sequence } from "remotion";
import Typing from "./Typing";

export type TextSequenceProps = {
  from: number;
  to: number;
  textSequence: string[];
  sequenceDelay?: number;
  framesPerCharacter?: number;
};

const defaultFramesPerCharacter = 1;
const defaultSequenceDelay = 40;

export const getSequenceLength = (
  sequence: string[],
  framesPerCharacter: number = defaultFramesPerCharacter,
  sequenceDelay: number = defaultSequenceDelay
) => {
  return sequence.reduce(
    (length, text) => length * framesPerCharacter + text.length + sequenceDelay,
    0
  );
};

export default function TextSequence({
  textSequence,
  from,
  sequenceDelay = defaultSequenceDelay,
  framesPerCharacter = defaultFramesPerCharacter,
}: TextSequenceProps) {
  return (
    <>
      {textSequence.map((text, sequenceIndex) => {
        const previousLength = getSequenceLength(
          textSequence.slice(0, sequenceIndex),
          framesPerCharacter,
          sequenceDelay
        );
        const thisLength = text.length;
        return (
          <Sequence
            key={sequenceIndex}
            from={from + previousLength}
            durationInFrames={thisLength + sequenceDelay}
          >
            <AbsoluteFill className="Frame">
              <p>
                <Typing framesPerCharacter={framesPerCharacter}>{text}</Typing>
              </p>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </>
  );
}
