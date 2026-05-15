"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import TechIcon from "@/components/shared/TechIcon";

function SkillCard({ category }: { category: (typeof skillCategories)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 10);
    setRotateY(x / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-colors duration-300"
      style={{ perspective: "1000px" }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {category.items.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 group/skill"
          >
            <TechIcon
              name={skill.icon}
              className="w-10 h-10 text-zinc-400 group-hover/skill:text-blue-400 transition-colors"
            />
            <span className="text-[11px] text-zinc-500 group-hover/skill:text-zinc-300 transition-colors text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsContent() {
  return (
    <section className="relative min-h-screen pt-32 pb-24">
      <div className="grid-background absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
            Tech Arsenal
          </h1>
          <p className="text-zinc-400 max-w-2xl mb-16 text-lg">
            Every tool, framework, and platform I wield to build world‑class
            digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} category={cat} />
          ))}
        </div>

        {/* Additional soft skills or proficiency bars can be added here */}
      </div>
    </section>
  );
}
