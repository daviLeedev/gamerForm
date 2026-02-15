import "./globals.css";
import "@gameform/ui/theme.css";
import { AppShell, Container } from "@gameform/ui";
import { ShortsWidget } from "@gameform/shorts-widget";
import { Providers } from "./providers";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { LeftBanner } from "./components/LeftBanner";
import { RightBanner } from "./components/RightBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
            <AppShell
              header={<SiteHeader />}
              leftBanner={<LeftBanner />}
              rightBanner={<RightBanner />}
              footer={<SiteFooter />}
            >
              <Container>{children}</Container>
            </AppShell>
          <ShortsWidget />
        </Providers>
      </body>
    </html>
  );
}
