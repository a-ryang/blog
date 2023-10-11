import Image from "next/image";

import classes from "./contribute-item.module.css";
import { MergedTag } from "./merged-tag";

export interface ContributeItemProps {
  image: string;
  name: string;
  description: string;
  href: string;
  status: "open" | "merged" | "closed";
  datetime: string;
}

export function ContributeItem({
  image,
  name,
  description,
  href,
  status,
  datetime,
}: ContributeItemProps) {
  return (
    <div>
      <h2 className={classes.name}>
        <Image src={image} alt={name} height={24} width={24} className={classes.image} />
        {name}
      </h2>

      <p className={classes.description}>
        {description} |{" "}
        <a target="_blank" rel="noopener" href={href}>
          바로가기
        </a>{" "}
      </p>

      <div className={classes.status}>
        <time dateTime={datetime}>{datetime}</time>
        {status === "merged" && <MergedTag />}
      </div>
    </div>
  );
}
