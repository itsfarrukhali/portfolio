"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experiences } from "@/data/experiences";
import { Button } from "@/components/ui/button";

export function ExperienceContent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [filter, setFilter] = useState("All");
  const filters = ["All", "Full Stack", "IT Support"];

  const filtered =
    filter === "All"
      ? experiences
      : experiences.filter((exp) => exp.title.includes(filter));

  return (
    <section ref={ref} className="relative min-h-screen pt-32 pb-24">
      <div className="grid-background absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
            Career Journey
          </h1>
          <p className="text-zinc-400 max-w-2xl mb-12 text-lg">
            A timeline of professional growth — from IT support to building
            AI-driven SaaS platforms.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex gap-3 mb-16 flex-wrap">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              className={`rounded-full px-6 ${filter === f ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-zinc-700 text-zinc-300 hover:bg-zinc-800"}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 h-full bg-blue-500 origin-top hidden md:block"
          />
          {filtered.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 flex flex-col md:flex-row items-start w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 px-0 md:px-8">
                <div className="glass-card p-6 hover:border-blue-500/50 transition-colors ml-10 md:ml-0">
                  <span className="text-blue-400 font-mono text-sm">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-white">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">{exp.company}</p>
                  <p className="text-zinc-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-zinc-950 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
