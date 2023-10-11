"use client";

import { Coffee, House } from "@phosphor-icons/react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import classes from "./sidebar.module.css";
import { SidebarItem, SidebarItemProps } from "./sidebar-item";

export function Sidebar() {
  const pathname = usePathname();

  const routes = useMemo<SidebarItemProps[]>(
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
    <aside className={classes.sidebar}>
      <h1 className="sr-only">sidebar</h1>

      <nav className={classes.navigation}>
        <h1 className="sr-only">blog nav</h1>
        <ul>
          {routes.map((item) => (
            <li key={item.label}>
              <SidebarItem key={item.label} {...item} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
