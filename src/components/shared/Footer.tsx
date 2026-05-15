"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import TechIcon from "@/components/shared/TechIcon";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-24 pb-8 bg-[#09090b]">
      <div className="grid-background absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-gradient"
            >
              <Image
                src="/fa-logo.png"
                alt="FA"
                width={50}
                height={50}
                className="h-8 w-auto"
              />

              <span>Farrukh Ali</span>
            </Link>

            <p className="text-zinc-500 text-sm mt-2">
              Full Stack JavaScript Developer — Karachi, Pakistan
            </p>
          </motion.div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/itsfarrukhali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <TechIcon name="github" className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/itsfarrukhali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <TechIcon name="linkedin" className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/itsfarrukhali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <TechIcon name="x" className="w-5 h-5" />
            </Link>
          </div>

          <div className="w-full h-px bg-white/5" />

          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-zinc-500 text-sm">
            <p>
              © {new Date().getFullYear()} Farrukh Ali. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <ArrowUp size={16} />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
