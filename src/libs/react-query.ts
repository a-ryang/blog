import type { QueryClientConfig } from "@tanstack/react-query";

export const queryConfig: QueryClientConfig["defaultOptions"] = {
  queries: {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
    retry: false,
  },
};
