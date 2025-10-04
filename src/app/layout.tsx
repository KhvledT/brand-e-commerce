import type { Metadata } from "next";
import { Inter, Zen_Dots } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import PageFooter from "@/components/PageFooter";
import AnnouncementBar from "@/components/AnnouncementBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const zenDots = Zen_Dots({
  variable: "--font-zen-dots",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Everlane | Quality Modern Essentials",
  description: "Everlane creates exceptional quality essentials, in ethical factories, at a fraction of the price of traditional retailers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${zenDots.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        <div className="flex flex-col min-h-screen">
          <AnnouncementBar />
          <HeaderNav />
            {children}
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
