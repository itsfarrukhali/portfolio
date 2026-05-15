import type { Metadata } from "next";
import { ExperienceContent } from "@/components/pages/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience | Farrukh Ali",
  description:
    "Career timeline of Farrukh Ali — from IT Support at Jinnah University to freelance full stack development and SaaS architecture.",
  openGraph: {
    title: "Experience | Farrukh Ali",
    description:
      "2+ years of professional experience in full stack development and IT systems.",
    url: "https://farrukhali.dev/experience",
    siteName: "Farrukh Ali Portfolio",
    images: [{ url: "/og-experience.png", width: 1200, height: 630 }],
  },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
