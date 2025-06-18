import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import { PostHogProvider } from "@/components/PostHogProvider";
import LenisProvider from "@/components/LenisProvider";
import ScrollToTop from "@/components/ScrollToTop";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta-sans",
});

// Load Cabinet Grotesk for hero section headings
const cabinetGrotesk = localFont({
  src: [
    {
      path: "./fonts/CabinetGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
});

export const metadata: Metadata = {
  title: "HextaSphere - IT & Engineering Services",
  description:
    "HextaSphere provides specialized IT and Engineering services including custom software development, blockchain solutions, and IoT systems.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    siteName: "HextaSphere - IT & Engineering Services",
    title: "HextaSphere - IT & Engineering Services",
    description:
      "HextaSphere provides specialized IT and Engineering services including custom software development, blockchain solutions, and IoT systems.",
      images: [
      {
        url: "https://cdn.hextasphere.com/og.png",
        width: 1200,
        height: 630,
        alt: "HextaSphere",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HextaSphere",
    description:
      "Specialized IT and Engineering services from HextaSphere – Fast, secure, and reliable.",
    images: [
      "https://cdn.hextasphere.com/og.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${cabinetGrotesk.variable} font-sans`}
      >
        <PostHogProvider>
          <HeroUIProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <LenisProvider>
                <NextTopLoader
                  color="#007BFF"
                  showSpinner={false}
                  initialPosition={0.2}
                />
                <Navbar />
                <main className="flex-1">{children}</main>
                <ScrollToTop />
                <Footer />
              </LenisProvider>
            </ThemeProvider>
          </HeroUIProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
