import React from "react";

export type FormatTextProps = {
  children: string;
  aliasMap: Record<string, React.ComponentType<any> | string>;
};

export default function FormatText({
  children,
  aliasMap = {}
}: FormatTextProps) {
  const aliases = Object.keys(aliasMap).map((alias) =>
    alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const aliasRegexp = new RegExp(aliases.join("|"), "g");
  const matches = children.match(aliasRegexp);
  if (!matches) {
    return <>{children}</>;
  }

  const result: JSX.Element[] = [];
  children.split(aliasRegexp).forEach((fragment, fragmentIndex) => {
    if (fragmentIndex > 0) {
      const match = matches[fragmentIndex - 1];
      if (!match) {
        return null;
      }
      const AliasComponent = aliasMap[match];
      if (!AliasComponent) {
        return null;
      }
      result.push(<AliasComponent key={fragmentIndex * 2 - 1} />);
    }
    result.push(
      <React.Fragment key={fragmentIndex * 2}>{fragment}</React.Fragment>
    );
  });

  return <>{result}</>;
}
