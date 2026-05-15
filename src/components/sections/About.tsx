// components/sections/About.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="grid-background absolute inset-0 z-0" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">The Story</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-center justify-center max-w-6xl mx-auto">
          {/* Avatar with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 md:w-80 md:h-80 shrink-0"
          >
            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />
            <Image
              src="/avatar.svg"
              alt="Farrukh Ali"
              fill
              sizes="(max-width: 768px) 16rem, 20rem"
              className="rounded-3xl object-cover border border-white/10"
            />
          </motion.div>

          {/* Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h3 className="text-3xl font-bold mb-6">
              Hi, I’m <span className="text-blue-500">Farrukh Ali</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Full Stack JavaScript Developer based in Karachi, Pakistan. With
              2+ years of hands‑on experience building production‑grade
              applications that solve real problems at scale.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              My core stack is MERN & PERN — I architect everything from
              AI‑powered SaaS platforms to real‑time communication systems,
              e‑commerce engines, and enterprise tooling.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              By day, I support 1000+ users as IT Support & Web Assistant at
              Jinnah University for Women. By night, I ship products that land
              in real users&apos; hands.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
