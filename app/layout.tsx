import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formation Et Sensibilisation Armenia",
  description:
    "An organization that aims to empower young people to develop societies based on human rights, respect for diversity and responsibility for environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
