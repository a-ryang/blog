import classes from "./section.module.css";
import { Icon } from "@phosphor-icons/react";

import { StrictPropsWithChildren } from "@/types/utils";
import { Divider } from "@/components/divider";

interface SectionProps {
  icon: Icon;
  title: string;
}

export function Section({ icon: Icon, title, children }: StrictPropsWithChildren<SectionProps>) {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>
        <Icon size={36} weight="fill" />
        {title}
      </h1>
      <Divider size="xs" />
      {children}
    </section>
  );
}
