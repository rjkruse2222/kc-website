import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kruse & Crawford CPAs | Cincinnati Accounting & Business Advisory",
  description: "Kruse and Crawford is a Cincinnati based accounting and business advisory firm that specializes in small to lower middle market companies.",
  keywords: "Cincinnati CPA, Cincinnati accounting, business advisory, tax preparation, financial reporting, consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
