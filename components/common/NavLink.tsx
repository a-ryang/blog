"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrictPropsWithChildren } from "@/type/util";

type Props = {
  href: string;
};

const NavLink = ({ href, children }: StrictPropsWithChildren<Props>) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={
        isActive
          ? "border-b-2 border-gray-600"
          : "text-neutral-600 dark:text-dark-100 transition-colors"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
