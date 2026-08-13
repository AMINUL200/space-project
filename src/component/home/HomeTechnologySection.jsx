import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Radar,
  Satellite,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  Activity,
  Wifi,
  Gauge,
  Sparkles,
} from "lucide-react";

/* =========================================================
   ORBIT RING
   A single tilted, rotating ring carrying one "planet" dot.
   Each instance gets its own radius, speed, direction, tilt
   and color so the system reads as layered orbital motion
   rather than one repeated effect.
========================================================= */
const OrbitRing = ({
  size,
  duration,
  reverse = false,
  tilt = 62,
  dotSize = 6,
  color = "#22D3EE",
  dotOffset = 0, // degrees — staggers where the dot sits on the ring
  opacity = 0.14,
}) => {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: size,
        height: size,
        transform: `translate(-50%, -50%) perspective(900px) rotateX(${tilt}deg)`,
      }}
    >
      <motion.div
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="relative h-full w-full rounded-full"
        style={{
          border: `1px solid ${color}`,
          borderColor: `${color}${Math.round(opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        }}
      >
        {/* trailing glow arc behind the dot */}
        <div
          className="absolute rounded-full blur-[6px]"
          style={{
            left: "50%",
            top: 0,
            width: dotSize * 3,
            height: dotSize * 3,
            transform: `translate(-50%, -50%) rotate(${dotOffset}deg) translateY(0)`,
            background: `radial-gradient(circle, ${color}66 0%, transparent 70%)`,
          }}
        />
        {/* the planet */}
        <span
          className="absolute rounded-full"
          style={{
            left: "50%",
            top: 0,
            width: dotSize,
            height: dotSize,
            transform: `translate(-50%, -50%) rotate(${dotOffset}deg)`,
            background: color,
            boxShadow: `0 0 ${dotSize * 2.5}px ${color}, 0 0 ${dotSize}px ${color}`,
          }}
        />
      </motion.div>
    </div>
  );
};

const HomeTechnologySection = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: "01",
      title: "Autonomous Systems",
      shortTitle: "AUTONOMY",
      description:
        "Intelligent autonomous systems designed to make critical decisions in environments where human intervention is limited.",
      icon: Cpu,
      metric: "99.8%",
      metricLabel: "SYSTEM RELIABILITY",
    },
    {
      id: "02",
      title: "Deep Space Communication",
      shortTitle: "COMMUNICATION",
      description:
        "Advanced communication architecture designed to maintain reliable connections across extreme distances.",
      icon: Wifi,
      metric: "24/7",
      metricLabel: "SIGNAL MONITORING",
    },
    {
      id: "03",
      title: "Orbital Intelligence",
      shortTitle: "ORBITAL AI",
      description:
        "Real-time orbital intelligence combines sensors, predictive models and mission data to improve navigation.",
      icon: Radar,
      metric: "0.02°",
      metricLabel: "NAVIGATION PRECISION",
    },
    {
      id: "04",
      title: "Mission Protection",
      shortTitle: "PROTECTION",
      description:
        "Multi-layered systems designed to protect spacecraft, data and mission-critical operations.",
      icon: ShieldCheck,
      metric: "360°",
      metricLabel: "MISSION COVERAGE",
    },
  ];

  const active = technologies[activeTech];
  const ActiveIcon = active.icon;

  return (
    <section id="technology" className="relative overflow-hidden bg-space py-8 sm:py-14 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan blur-[150px]"
        />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[850px]"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan" />
            <span className="font-inter text-[11px] font-medium uppercase tracking-[0.28em] text-cyan">
              Future Technology
            </span>
          </div>
          <h2 className="font-space-grotesk text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Engineering the
            <br />
            <span className="text-white/40">impossible</span>{" "}
            <span className="bg-gradient-to-r from-cyan via-primary to-purple bg-clip-text text-transparent">
              into reality.
            </span>
          </h2>
          <p className="mt-7 max-w-[650px] font-inter text-base leading-7 text-text-muted sm:text-lg">
            Our technology combines intelligent systems, advanced
            communication and precision engineering to solve the challenges
            of tomorrow's space missions.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT — TECH VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-[#070c1d]"
          >
            {/* ORBITAL SYSTEM — layered rings, each with its own
                radius, speed, direction, tilt and planet color */}
            <OrbitRing size={170} duration={14} tilt={58} dotSize={4} color="#5EEAD4" dotOffset={40} opacity={0.22} />
            <OrbitRing size={280} duration={28} reverse tilt={64} dotSize={7} color="#22D3EE" dotOffset={160} opacity={0.16} />
            <OrbitRing size={390} duration={42} tilt={60} dotSize={5} color="#A78BFA" dotOffset={260} opacity={0.12} />
            <OrbitRing size={480} duration={65} reverse tilt={67} dotSize={9} color="#FDBA74" dotOffset={95} opacity={0.08} />

            {/* Central glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl"
            />

            {/* Central system */}
            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/30 bg-space shadow-[0_0_60px_rgba(34,211,238,0.12)]">
              <div className="absolute inset-3 rounded-full border border-white/5" />
              <ActiveIcon size={42} strokeWidth={1.2} className="text-cyan" />
            </div>

            {/* Top status */}
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/40">
                  SYSTEM ONLINE
                </span>
              </div>
              <span className="font-space-grotesk text-[10px] text-white/20">SYS-04</span>
            </div>

           

          

            {/* Bottom data */}
            <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-5 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30">Current System</p>
                  <AnimateTitle title={active.shortTitle} />
                </div>
                <Sparkles size={18} className="text-white/20" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — TECHNOLOGY LIST (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10"
          >
            <div>
              {technologies.map((technology, index) => {
                const Icon = technology.icon;
                const isActive = activeTech === index;
                return (
                  <motion.button
                    key={technology.id}
                    type="button"
                    onClick={() => setActiveTech(index)}
                    whileHover={{ x: 5 }}
                    className={`group relative flex w-full cursor-pointer items-start gap-5 border-b border-white/10 py-6 text-left transition-all duration-300 first:pt-0 last:border-none last:pb-0 ${
                      isActive ? "text-white" : "text-white/40"
                    }`}
                  >
                    <motion.span
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      className="absolute -left-6 top-6 bottom-6 w-[2px] origin-center bg-cyan lg:-left-10"
                    />
                    <span className={`pt-1 font-space-grotesk text-xs ${isActive ? "text-cyan" : "text-white/20"}`}>
                      {technology.id}
                    </span>
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-cyan/30 bg-cyan/10 text-cyan"
                          : "border-white/10 bg-white/[0.02] text-white/30"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`font-space-grotesk text-xl font-medium tracking-[-0.02em] transition-colors duration-300 sm:text-2xl ${
                            isActive ? "text-white" : "text-white/55 group-hover:text-white/80"
                          }`}
                        >
                          {technology.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className={`shrink-0 transition-all duration-300 ${
                            isActive ? "text-cyan" : "text-white/20"
                          }`}
                        />
                      </div>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 10 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[560px] font-inter text-sm leading-6 text-text-muted">
                          {technology.description}
                        </p>
                        <div className="mt-5 flex items-center gap-8">
                          <div>
                            <p className="font-space-grotesk text-xl text-white">{technology.metric}</p>
                            <p className="mt-1 font-inter text-[9px] uppercase tracking-[0.16em] text-white/25">
                              {technology.metricLabel}
                            </p>
                          </div>
                          <div className="h-8 w-px bg-white/10" />
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                            <span className="font-inter text-[9px] uppercase tracking-[0.16em] text-white/35">
                              Operational
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

const AnimateTitle = ({ title }) => {
  return (
    <motion.p
      key={title}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1 font-space-grotesk text-2xl font-medium tracking-[-0.02em] text-white"
    >
      {title}
    </motion.p>
  );
};

export default HomeTechnologySection;