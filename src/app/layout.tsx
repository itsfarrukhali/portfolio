import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const jetbrainsMonoHeading = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Farrukh Ali | Full Stack JavaScript Engineer",
  description:
    "Specializing in AI SaaS, Real-Time Systems, and Scalable Architectures. Building production-grade applications with Next.js and Node.js.",
  keywords: [
    "Farrukh Ali",
    "Full Stack Developer",
    "Next.js Expert",
    "Software Engineer Portfolio",
    "MERN Stack",
  ],
  openGraph: {
    title: "Farrukh Ali | Full Stack JavaScript Engineer",
    description: "I turn ambitious ideas into production-ready applications.",
    url: "https://farrukhali.dev",
    siteName: "Farrukh Ali Portfolio",
    images: [
      {
        url: "/og-image.png", // Create a 1200x630 image
        width: 1200,
        height: 630,
        alt: "Farrukh Ali Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farrukh Ali | Full Stack Engineer",
    description: "Building the future of SaaS and AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        jetbrainsMonoHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-[#09090b]">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
