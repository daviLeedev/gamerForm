import "./globals.css";
import "@gameform/ui/theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <header style={{ padding: "12px 16px", borderBottom: "1px solid #e0e0e0" }}>
            <a href="/" style={{ fontWeight: 700 }}>Shorts</a>
          </header>
          <main style={{ flex: 1 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
