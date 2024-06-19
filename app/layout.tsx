import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Mathtoro",
  description: "数式チャットアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
          <SessionProvider>
            {children}
          </SessionProvider>
      </body>
    </html>
  );
}
