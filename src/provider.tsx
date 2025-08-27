import type { NavigateOptions } from "react-router-dom";
import React from "react";

import { HeroUIProvider } from "@heroui/system";
import { useHref, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          // useErrorBoundary: false,
          refetchOnWindowFocus: false,
          retry(failureCount, error: any) {
            if (error.status === 404) return false;
            if (error.status === 403) return false;
            if (failureCount < 2) return true;

            return false;
          },
        },
      },
    })
  );
  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </HeroUIProvider>
  );
}
