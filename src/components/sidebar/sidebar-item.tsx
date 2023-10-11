import { Icon } from "@phosphor-icons/react";
import Link from "next/link";
import clsx from "clsx";

import classes from "./sidebar-item.module.css";

export interface SidebarItemProps {
  icon: Icon;
  label: string;
  href: string;
  isActive?: boolean;
}

export function SidebarItem({ icon: Icon, label, href, isActive }: SidebarItemProps) {
  return (
    <Link href={href} className={clsx(classes["sidebar-item"], isActive ? classes.active : "")}>
      <Icon size={28} weight="fill" />
      <span className={classes["sidebar-item-label"]}>{label}</span>
    </Link>
  );
}
