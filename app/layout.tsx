import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Python Automation | Terminal Training",
  description: "12-week hacker-style Python course. Type code, run it, learn why.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono bg-hack-bg text-hack-green antialiased">
        {children}
      </body>
    </html>
  );
}
