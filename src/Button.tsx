import { DOMAttributes, AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const styles = {
  primary:
    "bg-primary text-text border-primary-dark [text-shadow:0px_2px_0px_#963342] hover:bg-primary-dark",
  secondary:
    "bg-secondary text-text-secondary border-secondary-dark [text-shadow:0px_2px_0px_#1A394C;] hover:bg-secondary-dark",
};

export default function Button({
  className: externalClassName = "",
  variant = "primary",
  ...restProps
}: ButtonProps) {
  const className = twMerge(
    "px-5 py-2 text-lg font-bold text-center border-2 uppercase transition-colors hover:[text-shadow: none]",
    styles[variant],
    externalClassName
  );

  return <a className={className} {...restProps} />;
}
