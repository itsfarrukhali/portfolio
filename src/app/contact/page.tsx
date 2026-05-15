import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Farrukh Ali | Let's Build Together",
  description:
    "Get in touch — whether you have a project idea, collaboration, or just want to say hi. Based in Karachi, Pakistan.",
  openGraph: {
    title: "Contact Farrukh Ali",
    description:
      "Let's build something ambitious. Reach out via the form or email.",
    url: "https://farrukhali.dev/contact",
    siteName: "Farrukh Ali Portfolio",
    images: [{ url: "/og-contact.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
