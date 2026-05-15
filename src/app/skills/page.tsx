import type { Metadata } from "next";
import { SkillsContent } from "@/components/pages/SkillsContent";

export const metadata: Metadata = {
  title: "Skills & Tech Stack | Farrukh Ali",
  description:
    "Mastery of modern web technologies — React, Next.js, Node.js, PostgreSQL, real-time systems, and IT infrastructure.",
  openGraph: {
    title: "Skills & Tech Stack | Farrukh Ali",
    description:
      "From frontend to backend to cloud — a complete full-stack arsenal.",
    url: "https://farrukhali.dev/skills",
    siteName: "Farrukh Ali Portfolio",
    images: [{ url: "/og-skills.png", width: 1200, height: 630 }],
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
