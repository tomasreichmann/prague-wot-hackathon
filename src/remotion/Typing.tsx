import { useCurrentFrame } from "remotion";
import "./HackatonIntroComposition.css";
import FormatText from "./FormatText";

export type TypingProps = {
  children: string;
  framesPerCharacter?: number;
  from?: number;
};

const aliasMap = {
  "|": "br"
};

export default function Typing({
  children,
  framesPerCharacter = 3,
  from = 0
}: TypingProps) {
  const frame = useCurrentFrame();

  const stringLength = Math.max(
    Math.min(Math.ceil((frame - from) / framesPerCharacter), children.length),
    0
  );

  return (
    <>
      <FormatText aliasMap={aliasMap}>
        {children.slice(0, stringLength)}
      </FormatText>
      <span style={{ color: "transparent", userSelect: "none" }}>
        <FormatText aliasMap={aliasMap}>
          {children.slice(stringLength)}
        </FormatText>
      </span>
    </>
  );
}
