import classes from "./merged-tag.module.css";
import { GitMerge } from "@phosphor-icons/react/dist/ssr/index";

export function MergedTag() {
  return (
    <span className={classes["merged-tag"]}>
      <GitMerge size={14} weight="fill" /> Merged
    </span>
  );
}
