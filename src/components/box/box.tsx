import classes from "./box.module.css";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface BoxProps extends React.ComponentProps<"div"> {
  style?: React.CSSProperties;
  className?: string;
}

export function Box({ style, className = "", children, ...props }: PropsWithChildren<BoxProps>) {
  return (
    <div style={style} className={clsx(classes.box, className)} {...props}>
      {children}
    </div>
  );
}
