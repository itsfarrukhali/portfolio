"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react"; // still fine, not a brand
import TechIcon from "@/components/shared/TechIcon";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 container mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gradient">Selected Works</h2>
        <p className="text-zinc-500 mt-2 max-w-lg">
          Scalable systems and AI products — built for real users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="glass-card group relative overflow-hidden rounded-3xl transition-all duration-500 hover:border-white/20"
          >
            {/* Hover gradient overlay */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Content */}
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

              {/* Action buttons */}
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

            {/* Placeholder for screenshot */}
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
        ))}
      </div>
    </section>
  );
}
