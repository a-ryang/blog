"use client";

import { StrictPropsWithChildren } from "@/type/util";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: StrictPropsWithChildren) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
