"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingSteps = [
  { text: "Initializing kernel...", delay: 200 },
  { text: "Loading React 19 core modules...", delay: 500 },
  { text: "Establishing neural link to PostgreSQL...", delay: 400 },
  { text: "Optimizing Vercel edge functions...", delay: 600 },
  { text: "Injecting Framer Motion sequences...", delay: 300 },
  { text: "System Online: Farrukh Ali Portfolio v1.0", delay: 800 },
];

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < loadingSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, loadingSteps[currentStep].delay);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 1000);
    }
  }, [currentStep, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-999 bg-[#09090b] flex flex-col items-center justify-center font-mono p-6"
    >
      <div className="w-full max-w-md">
        {loadingSteps.slice(0, currentStep + 1).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-2 text-sm"
          >
            <span className="text-blue-500 tracking-tighter">[{i + 1}]</span>
            <span
              className={
                i === loadingSteps.length - 1
                  ? "text-green-400 font-bold"
                  : "text-zinc-400"
              }
            >
              {step.text}
            </span>
            {i < currentStep && (
              <span className="text-green-500 ml-auto">DONE</span>
            )}
          </motion.div>
        ))}

        <div className="mt-8 w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-full bg-blue-600"
          />
        </div>
      </div>
    </motion.div>
  );
}
