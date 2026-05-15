import type { Metadata } from "next";
import { ProjectsContent } from "@/components/pages/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Farrukh Ali",
  description:
    "A curated selection of production-grade applications — AI SaaS, real-time chat, e-commerce, and more.",
  openGraph: {
    title: "Projects | Farrukh Ali",
    description:
      "Explore AI SaaS, real-time systems, e-commerce, and enterprise tools built with MERN/PERN stack.",
    url: "https://farrukhali.dev/projects",
    siteName: "Farrukh Ali Portfolio",
    images: [{ url: "/og-projects.png", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
