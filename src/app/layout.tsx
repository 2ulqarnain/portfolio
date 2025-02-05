import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zulqarnain Haider",
  description: "Full Stack Web Developer",
};

export const viewport: Viewport = {
  themeColor: "#d6d3d1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} text-[var(--foreground)] md:h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
