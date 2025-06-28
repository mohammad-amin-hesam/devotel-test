import { WebRootLayoutProviders } from "@repo/shared/components/layout/root-layout-providers";

import "@repo/shared/app/globals.css";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/images/logo-transparent.png"
          sizes="any"
        />
      </head>
      <body suppressHydrationWarning>
        <WebRootLayoutProviders>
          {children}
        </WebRootLayoutProviders>
      </body>
    </html>
  );
}
