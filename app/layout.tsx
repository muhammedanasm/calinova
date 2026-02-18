import type { Metadata } from "next";
import localFont from "next/font/local";
import MainWrapper from "@/components/layout/MainWrapper";
import "./globals.css";

// Clash Grotesk Variable Font Setup
const clashGrotesk = localFont({
  src: "../public/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  weight: "100 900",
});

// Satoshi Variable Font Setup
const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Calinova | Innovation's Next Chapter",
  description: "Calinova - Leading the future of AI and human-centric design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clashGrotesk.variable} ${satoshi.variable}`}>
      <body className="bg-black text-white antialiased font-satoshi">
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
