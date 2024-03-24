import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-3xl px-4 py-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed w-full top-0 bg-base-100 bg-opacity-[0.9] z-[1000]">
      <div className="mx-auto max-w-3xl px-4 py-5 flex items-center justify-between ">
        <div>
          <Link href={siteConfig.path.home} className="flex items-center">
            <Image
              alt="프로필 이미지"
              src={siteConfig.author.image}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="ml-2 font-md">{siteConfig.author.name}</span>
          </Link>
        </div>

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
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center pt-4 pb-20 space-x-3">
        <span className="text-mute text-xs">
          {`© ${new Date().getFullYear()}`} {siteConfig.author.name}
        </span>
      </div>
    </footer>
  );
}
