import type { Metadata } from "next";
import "./globals.css";
import NavFooter from "@/components/nav-footer";

export const metadata: Metadata = {
  title: "Demo App",
  description: "App With Next Frontend & Flask Backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavFooter />
      </body>
    </html>
  );
}
