import clsx from "clsx";

import classes from "./box.module.css";
import { StrictPropsWithChildren } from "@/types/utils";

interface BoxProps {
  className?: string;
}

export function Box({ className = "", children }: StrictPropsWithChildren<BoxProps>) {
  return <div className={clsx(classes.box, className)}>{children}</div>;
}
