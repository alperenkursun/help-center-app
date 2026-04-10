import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Gilroy-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Help Center App",
  description: "App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${gilroy.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}