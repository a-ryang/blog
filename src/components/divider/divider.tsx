import classes from "./divider.module.css";

interface DividerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xs";
}

export function Divider({ size = "md" }: DividerProps) {
  const sizeClass = `divider-size-${size}`;
  return <div aria-hidden className={`${classes.divider} ${classes[sizeClass]}`}></div>;
}
