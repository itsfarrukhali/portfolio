// components/sections/Skills.tsx
"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, type SkillCategory } from "@/data/skills";
// Simple custom icons component (you can replace with react-simple-icons or a SVG map)
import TechIcon from "@/components/shared/TechIcon";

function SkillCard({ category }: { category: SkillCategory }) {
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
      style={{
        perspective: "1000px",
      }}
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
            <span className="text-[11px] text-zinc-500 group-hover/skill:text-zinc-300 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="grid-background absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Tech Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
