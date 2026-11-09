import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dotconsole — Digital products, thoughtfully built",
  description: "An independent digital studio designing and building thoughtful web products. Explore Casually Social, TractionForge, FeatureLogs, and WordLine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
