"use client";

import { ReactNode } from "react";
import { AppProgressProvider } from "@bprogress/next";

export interface ProgressWrapperProps {
  children: ReactNode;
}

export function ProgressProvider({ children }: ProgressWrapperProps) {
  return (
    <AppProgressProvider
      height="3px"
      options={{ direction: "rtl", showSpinner: false }}
      shallowRouting
      color={"oklch(0.769 0.188 70.08)"}
    >
      {children}
    </AppProgressProvider>
  );
}
