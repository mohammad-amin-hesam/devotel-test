import { ReactElement, ReactNode } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";
import { TestThemeProvider } from "./test-theme-provider";
import { SidebarProvider } from "../../components/ui/sidebar";
import {
  RenderOptions,
  render as testingRender,
} from "@testing-library/react";
import { Providers } from "../../components/providers/query-client-provider";

export interface AllProvidersProps {
  children: ReactNode;
}

function AllProviders({ children }: AllProvidersProps) {
  return (
    <Providers>
      <DirectionProvider dir="rtl">
        <TestThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </TestThemeProvider>
      </DirectionProvider>
    </Providers>
  );
}

export * from "@testing-library/react";
export function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return testingRender(ui, { wrapper: AllProviders, ...options });
}
