import { PropsWithChildren } from "react";

import Header from "./header";
import Footer from "./footer";

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
