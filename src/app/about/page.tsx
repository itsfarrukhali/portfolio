import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Farrukh Ali | Full Stack JavaScript Engineer",
  description:
    "The story of Farrukh Ali — a full stack developer from Karachi, Pakistan. From IT support to building AI SaaS platforms and real-time systems.",
  openGraph: {
    title: "About Farrukh Ali",
    description:
      "Full stack developer with 2+ years of experience in MERN/PERN, AI SaaS, and real-time systems.",
    url: "https://farrukhali.dev/about",
    siteName: "Farrukh Ali Portfolio",
    images: [{ url: "/og-about.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
