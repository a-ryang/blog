import { ReactNode } from "react";
import clsx from "clsx";

export interface IconBaseProps {
  height?: number;
  width?: number;
  className?: string;
  children: ReactNode;
}

export interface IconProps extends Omit<IconBaseProps, "children"> {}

const IconBase = ({ children, className = "", ...props }: IconBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={clsx("inline-block", className)}
      {...props}
    >
      {children}
    </svg>
  );
};

export default IconBase;
