import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHANDICON 2026 | IEEE Conference",
  description: "The Premier Conference for Industrial Information Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
