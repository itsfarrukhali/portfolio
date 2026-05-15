// components/sections/Contact.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin } from "lucide-react";
import TechIcon from "@/components/shared/TechIcon";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form handling logic (e.g., EmailJS, API route)
    alert("Message sent! (form submission placeholder)");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="grid-background absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Let&apos;s Build</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div>
                <label className="text-zinc-400 text-sm mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 focus:outline-none transition-colors"
                  placeholder="Farrukh Ali"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-zinc-400 text-sm mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 focus:outline-none transition-colors"
                  placeholder="hello@farrukhali.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-zinc-400 text-sm mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 text-lg gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-blue-400" />
                <span className="text-zinc-400 text-sm">
                  afarrukh302@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" />
                <span className="text-zinc-400 text-sm">Karachi, Pakistan</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-white mb-4">
                Follow Along
              </h3>
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
                  href="https://twitter.com/itsdaaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-zinc-700 hover:border-zinc-400 text-zinc-400 hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <TechIcon name="x" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
