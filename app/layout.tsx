import type { Metadata } from "next";
import { Inter, DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "HIFI Traffic Data Tech | Accurate Data. Smarter Decisions.",
  description: "High-quality traffic data collection and analysis to support better planning, design, and operational decisions.",
  keywords: "traffic volume studies, turning movement counts, pedestrian counts, vehicle classification, transportation engineering",
  icons: {
    icon: "/hifi-logo.svg",
    apple: "/hifi-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${dmSans.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

