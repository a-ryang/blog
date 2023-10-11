import classes from "./container.module.css";
import { StrictPropsWithChildren } from "@/types/utils";

/** padding x: 1rem container */
export function Container({ children }: StrictPropsWithChildren) {
  return <div className={classes.container}>{children}</div>;
}
