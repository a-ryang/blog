"use client";

import { useEffect, useState } from "react";

import { StrictPropsWithChildren } from "@/utils/react";

type Props = {
  ms?: number;
};

export default function Deferrer({
  ms = 200,
  children,
}: StrictPropsWithChildren<Props>) {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDeferred(true);
    }, ms);

    return () => clearTimeout(timeout);
  }, [ms]);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
}
