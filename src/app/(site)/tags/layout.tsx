import { PropsWithChildren } from "react";

import SiteLayout from "../_components/site-layout";

export default function Layout({ children }: PropsWithChildren) {
  return <SiteLayout>{children}</SiteLayout>;
}
