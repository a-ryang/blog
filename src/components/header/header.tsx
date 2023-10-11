"use client";

import { Coffee, House } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import classes from "./header.module.css";
import { HeaderItem, HeaderItemProps } from "./header-item";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const pathname = usePathname();

  const routes = useMemo<HeaderItemProps[]>(
    () => [
      {
        icon: House,
        label: "Home",
        href: "/",
        isActive: pathname === "/",
      },
      {
        icon: Coffee,
        label: "About",
        href: "/about",
        isActive: pathname === "/about",
      },
    ],
    [pathname],
  );

  return (
    <header className={classes.header}>
      <ul className={classes.navigation}>
        {routes.map((item) => (
          <li key={item.label}>
            <HeaderItem {...item} />
          </li>
        ))}
      </ul>
      {title && <h1 className={classes.title}>{title}</h1>}
    </header>
  );
}
