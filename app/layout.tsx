import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Python Automation Course App",
  description: "Interactive Python automation learning with levels, exercises, and progress tracking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
