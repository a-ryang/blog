import { ReactNode } from "react";

export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

export const isDev = process.env.NODE_ENV === "development";
