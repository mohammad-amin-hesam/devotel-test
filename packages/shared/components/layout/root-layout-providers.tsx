"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "../theme-provider";
import { ProgressProvider } from "../providers/progress-provider";
import { Toaster } from "../ui/sonner";
import { Providers } from "../providers/query-client-provider";

interface ProvidersProps {
  children: ReactNode;
  isLayoutDisabled?: boolean;
}

export function WebRootLayoutProviders({
  children,
}: ProvidersProps) {
  return (
    <Providers>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <ProgressProvider>{children}</ProgressProvider>
        <Toaster />
      </ThemeProvider>
    </Providers>
  );
}