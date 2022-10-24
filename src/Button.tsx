import { DOMAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonCommonProps = {
  className?: string;
  size?: "big";
  variant?: "primary" | "secondary";
};

export type ButtonProps =
  | ({
      Component: "button";
    } & DOMAttributes<HTMLButtonElement> &
      ButtonCommonProps)
  | ({
      Component: "a";
    } & AnchorHTMLAttributes<HTMLAnchorElement> &
      ButtonCommonProps);

const x = <a href="ccc"></a>;

export default function Button({
  className: externalClassName = "",
  variant = "secondary",
  size,
  ...props
}: ButtonProps) {
  const classNames = [externalClassName, styles.Button];
  if (variant === "primary") {
    classNames.push(styles.Button_primary);
  }
  if (variant === "secondary") {
    classNames.push(styles.Button_secondary);
  }
  if (size === "big") {
    classNames.push(styles.Button_big);
  }
  const className = classNames.join(" ");
  if (props.Component === "button") {
    const { Component, ...innerProps } = props;
    return <Component className={className} {...innerProps}></Component>;
  }
  const { Component, ...innerProps } = props;
  return <Component className={className} {...innerProps}></Component>;
}
