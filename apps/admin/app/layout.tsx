import "./globals.css";
import "@gameform/ui/theme.css";
import { AppShell, Container, SideNav, SideNavItem } from "@gameform/ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AppShell
          sidebar={
            <SideNav>
              <SideNavItem href="/" active>Dashboard</SideNavItem>
              <SideNavItem href="/content">Content</SideNavItem>
              <SideNavItem href="/users">Users</SideNavItem>
            </SideNav>
          }
        >
          <Container>{children}</Container>
        </AppShell>
      </body>
    </html>
  );
}
