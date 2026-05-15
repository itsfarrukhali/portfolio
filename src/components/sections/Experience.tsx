"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experiences";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <h2 className="text-4xl font-bold text-center mb-20">
        <span className="text-gradient">Career Journey</span>
      </h2>

      <div className="max-w-4xl mx-auto relative px-4 md:px-0">
        {/* Animated center line (visible on md+) */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-4 md:left-1/2 top-0 w-0.5 h-full bg-blue-500 origin-top hidden md:block"
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative mb-12 flex flex-col md:flex-row items-start w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Card side */}
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

            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-zinc-950 z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
