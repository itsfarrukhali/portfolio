"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import TechIcon from "@/components/shared/TechIcon";

const categories = ["All", "AI SaaS", "Real-Time", "E-Commerce", "Clone"];

export function ProjectsContent() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="relative min-h-screen pt-32 pb-24">
      <div className="grid-background absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
            Selected Works
          </h1>
          <p className="text-zinc-400 max-w-2xl mb-12 text-lg">
            Production‑grade systems and AI products — built for real users.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-16 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              className={`rounded-full px-6 ${
                filter === cat
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glass-card group relative overflow-hidden rounded-3xl transition-all duration-500 hover:border-white/20">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="p-8 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-blue-400 uppercase tracking-tighter bg-blue-400/5 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white transition-colors"
                      >
                        <TechIcon name="github" className="w-5 h-5" />
                      </Link>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="relative h-64 w-full mt-4 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-t-xl mx-4 shadow-2xl border-t border-x border-white/10"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-800 rounded-t-xl mx-4 shadow-2xl border-t border-x border-white/10 flex items-center justify-center text-zinc-600 text-sm">
                      Project screenshot
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats – using Next.js Image with unoptimized for external URL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-gradient">
            Open Source Activity
          </h2>
          <div className="glass-card inline-block p-6">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=itsfarrukhali&show_icons=true&theme=transparent&text_color=ffffff&title_color=3b82f6"
              alt="GitHub Stats"
              width={495}
              height={195}
              unoptimized
              className="h-auto max-w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
