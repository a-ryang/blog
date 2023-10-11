import { Icon } from "@phosphor-icons/react";
import clsx from "clsx";
import Link from "next/link";

import classes from "./header-item.module.css";

export interface HeaderItemProps {
  icon: Icon;
  label: string;
  href: string;
  isActive?: boolean;
}

export function HeaderItem({ icon: Icon, label, href, isActive }: HeaderItemProps) {
  return (
    <Link
      aria-label={label}
      href={href}
      className={clsx(classes["header-item"], isActive ? classes.active : "")}
    >
      <Icon size={20} weight="fill" />
    </Link>
  );
}
