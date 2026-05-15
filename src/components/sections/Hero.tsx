"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Terminal, Download, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="grid-background absolute inset-0 z-0" />

      {/* Central floating glow – uses theme’s glow variable */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 z-0 bg-[radial-gradient(circle_at_center,var(--glow-color,rgba(59,130,246,0.3))_0%,transparent_70%)]" />

      <div className="container relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6"
        >
          <Terminal size={14} />
          <span className="font-mono tracking-widest uppercase text-xs">
            System Ready: v2.0.4
          </span>
        </motion.div>

        {/* Heading with text‑gradient + blue accent */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
          <span className="text-gradient">Farrukh</span>{" "}
          <span className="text-blue-500">Ali</span>
        </h1>

        {/* Type animation */}
        <div className="h-12 md:h-16 mb-8">
          <TypeAnimation
            sequence={[
              "Full Stack JavaScript Developer",
              2000,
              "AI SaaS Architect",
              2000,
              "Real-Time Systems Expert",
              2000,
              "System Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl md:text-4xl font-light text-zinc-400"
            repeat={Infinity}
          />
        </div>

        {/* Quote glass card */}
        <div className="inline-block glass-card px-6 py-3 mb-10">
          <p className="max-w-2xl mx-auto text-zinc-300 text-lg">
            “I turn ambitious ideas into production-ready applications.”
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
          >
            View Projects <Rocket className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-zinc-700 hover:bg-zinc-800 text-zinc-200"
          >
            Download Resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
