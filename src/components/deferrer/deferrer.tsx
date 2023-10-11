"use client";

import { useEffect, useState } from "react";

import { StrictPropsWithChildren } from "@/types/utils";

interface DeferrerProps {
  ms?: number;
}

export function Deferrer({ ms = 200, children }: StrictPropsWithChildren<DeferrerProps>) {
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
