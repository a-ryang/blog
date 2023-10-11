import classes from "./app-shell.module.css";

import { StrictPropsWithChildren } from "@/types/utils";

import { Sidebar } from "../sidebar";

export function AppShell({ children }: StrictPropsWithChildren) {
  return (
    <div className={classes["app-shell"]}>
      <main className={classes.main}>{children}</main>
      <Sidebar />
    </div>
  );
}
