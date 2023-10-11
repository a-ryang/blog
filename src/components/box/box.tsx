import clsx from "clsx";

import classes from "./box.module.css";
import { StrictPropsWithChildren } from "@/types/utils";

interface BoxProps {
  style?: React.CSSProperties;
  className?: string;
}

export function Box({ style, className = "", children }: StrictPropsWithChildren<BoxProps>) {
  return (
    <div style={style} className={clsx(classes.box, className)}>
      {children}
    </div>
  );
}
