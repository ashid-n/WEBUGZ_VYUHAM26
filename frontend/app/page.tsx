"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { InputCard } from "@/components/input/InputCard";
import { RecentAnalyses } from "@/components/input/RecentAnalyses";

// Home: cinematic hero + input card + recent analyses. Owner: Frontend A.
export default function HomePage() {
  return (
    <div className="bg-grid-glow relative min-h-[calc(100dvh-3.5rem)] overflow-hidden">
      {/* Cinematic Ambient Backdrop Orbs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-20 -right-32 -z-10 h-80 w-80 rounded-full bg-teal-500/5 blur-[110px]"
        aria-hidden="true"
      />

      <main className="relative mx-auto flex max-w-2xl flex-col gap-10 px-6 py-14 sm:py-20">
        {/* Animated Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* High-Tech Tactical Beacon Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface/80 px-3.5 py-1 text-xs font-medium text-primary shadow-[0_0_16px_rgba(0,255,133,0.15)] backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            <span className="tracking-wide">ATT&amp;CK v20 · Evidence-Grounded Engine</span>
          </motion.div>

          {/* Cinematic Headline */}
          <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Threat reports in.{" "}
            <span className="relative inline-block text-primary drop-shadow-[0_0_24px_rgba(0,255,133,0.45)]">
              Verified intelligence
            </span>{" "}
            out.
          </h1>

          <p className="max-w-lg text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every technique is verified against ATT&amp;CK v20 with exact quoted evidence from the report text —
            hallucinated IDs are rejected and prompt-injection attacks neutralized in real time.
          </p>
        </motion.div>

        {/* Input Card with Tactical Frame */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="hud-frame"
        >
          <InputCard />
        </motion.div>

        {/* Recent Analyses with Smooth Entrance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              <Terminal className="size-3.5 text-primary" aria-hidden="true" /> Recent Analyses &amp; Memory Feed
            </h2>
            <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground/70">
              <Sparkles className="size-3 text-primary/70" /> Live cache
            </span>
          </div>
          <RecentAnalyses />
        </motion.section>
      </main>
    </div>
  );
}
