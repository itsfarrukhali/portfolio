"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AboutContent() {
  return (
    <section className="relative min-h-screen pt-32 pb-24">
      <div className="grid-background absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-gradient">The Story</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-72 h-72 md:w-96 md:h-96 shrink-0"
          >
            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />
            <Image
              src="/avatar.svg"
              alt="Farrukh Ali"
              fill
              sizes="(max-width: 768px) 18rem, 24rem"
              className="rounded-3xl object-cover border border-white/10"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">
              Hi, I’m <span className="text-blue-500">Farrukh Ali</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
              Full Stack JavaScript Developer based in Karachi, Pakistan. With
              2+ years of hands‑on experience building production‑grade
              applications that solve real problems at scale.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
              My core stack is MERN & PERN — I architect everything from
              AI‑powered SaaS platforms to real‑time communication systems,
              e‑commerce engines, and enterprise tooling.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
              By day, I support 1000+ users as IT Support & Web Assistant at
              Jinnah University for Women, managing Active Directory,
              infrastructure, and web systems. By night, I ship products that
              land in real users&apos; hands.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="glass-card p-4 text-center">
                <span className="block text-2xl font-bold text-blue-400">
                  2+
                </span>
                <span className="text-zinc-500 text-sm">Years Exp.</span>
              </div>
              <div className="glass-card p-4 text-center">
                <span className="block text-2xl font-bold text-blue-400">
                  10+
                </span>
                <span className="text-zinc-500 text-sm">Projects</span>
              </div>
              <div className="glass-card p-4 text-center">
                <span className="block text-2xl font-bold text-blue-400">
                  1000+
                </span>
                <span className="text-zinc-500 text-sm">Users Supported</span>
              </div>
              <div className="glass-card p-4 text-center">
                <span className="block text-2xl font-bold text-blue-400">
                  24/7
                </span>
                <span className="text-zinc-500 text-sm">Builder Mindset</span>
              </div>
            </div>

            {/* Resume download */}
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
              >
                <Link href="/resume.pdf" target="_blank" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Education / Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
            Education & Journey
          </h2>
          <div className="space-y-8">
            <div className="glass-card p-6">
              <span className="text-blue-400 font-mono text-sm">
                2025 - Present
              </span>
              <h3 className="text-xl font-bold mt-1">
                IT Support & Web Assistant
              </h3>
              <p className="text-zinc-400 text-sm">
                Jinnah University for Women
              </p>
              <p className="text-zinc-500 mt-2">
                Managed infrastructure for 1000+ users, Active Directory, and
                system administration.
              </p>
            </div>
            <div className="glass-card p-6">
              <span className="text-blue-400 font-mono text-sm">
                2023 - Present
              </span>
              <h3 className="text-xl font-bold mt-1">
                Freelance Full Stack Developer
              </h3>
              <p className="text-zinc-400 text-sm">Remote</p>
              <p className="text-zinc-500 mt-2">
                Architecting SaaS platforms, Stripe integrations, and
                performance-optimized e-commerce systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
