import { PropsWithChildren } from "react";

import SiteLayout from "@/components/site-layout";

export default function Layout({ children }: PropsWithChildren) {
  return <SiteLayout>{children}</SiteLayout>;
}
