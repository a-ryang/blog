import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config";

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white">
      <div className="mx-auto container px-4 md:px-8 py-5 flex items-center justify-between ">
        <h1>
          <Link href={siteConfig.path.home} className="flex items-center">
            <Image
              alt={siteConfig.author.name}
              src={siteConfig.author.image}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="ml-2 font-md">{siteConfig.author.name}</span>
          </Link>
        </h1>
        <nav>
          <h1 className="hidden">블로그 네비게이션</h1>
          <ul className="flex gap-2.5">
            <li>
              <Link href={siteConfig.path.home} className={"px-1 py-2 text-sm"}>
                home
              </Link>
            </li>
            <li>
              <Link href={siteConfig.path.about} className="px-1 py-2 text-sm">
                about
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
