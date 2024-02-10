import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="mx-auto container min-h-screen px-4 py-20 md:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed w-full top-0 bg-base-100 bg-opacity-[0.9]  z-[1000]">
      <div className="mx-auto container px-4 md:px-8 py-5 flex items-center justify-between ">
        <h1>
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
