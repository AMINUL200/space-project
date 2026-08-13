import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Rocket, Radio, Sparkles, Satellite, Globe, Orbit } from "lucide-react";

/* =========================================================
   ORBIT PATH
   A ring carrying one glowing planet, own speed/direction/color.
========================================================= */
const OrbitPath = ({ size, duration, reverse = false, dotSize = 6, color, startAngle = 0, opacity = 0.16 }) => (
  <div
    className="absolute left-1/2 top-1/2 rounded-full"
    style={{
      width: size,
      height: size,
      transform: "translate(-50%, -50%)",
      border: `1px solid ${color}`,
      borderColor: `${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")}`,
    }}
  >
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="relative h-full w-full rounded-full"
      style={{ transform: `rotate(${startAngle}deg)` }}
    >
      <div
        className="absolute rounded-full blur-[5px]"
        style={{
          left: "50%",
          top: 0,
          width: dotSize * 2.6,
          height: dotSize * 2.6,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${color}80 0%, transparent 70%)`,
        }}
      />
      <span
        className="absolute rounded-full"
        style={{
          left: "50%",
          top: 0,
          width: dotSize,
          height: dotSize,
          transform: "translate(-50%, -50%)",
          background: color,
          boxShadow: `0 0 ${dotSize * 2}px ${color}`,
        }}
      />
    </motion.div>
  </div>
);

/* =========================================================
   STAR
========================================================= */
const Star = ({ className, size = "tiny", delay = 0 }) => {
  const dimensions = size === "small" ? "h-1 w-1" : "h-0.5 w-0.5";
  return (
    <motion.span
      animate={{ opacity: [0.1, 0.9, 0.1], scale: [1, 1.8, 1] }}
      transition={{ duration: 2 + delay * 0.5, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute rounded-full bg-white ${dimensions} ${className}`}
    />
  );
};

const STATUS_MESSAGES = [
  "Establishing Uplink",
  "Calibrating Sensors",
  "Aligning Trajectory",
  "Preparing for Launch",
];

const PageLoader = ({ onComplete, duration = 3400 }) => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, duration / STATUS_MESSAGES.length);

    const done = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => {
      clearInterval(cycle);
      clearTimeout(done);
    };
  }, [onComplete, duration]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-space text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.1, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-250px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple blur-[170px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-200px] top-[-200px] h-[450px] w-[450px] rounded-full bg-primary blur-[150px]"
        />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* STARS */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <Star
            key={i}
            className={`left-[${Math.random() * 95 + 2}%] top-[${Math.random() * 95 + 2}%]`}
            size={Math.random() > 0.6 ? "small" : "tiny"}
            delay={Math.random() * 3}
          />
        ))}
      </div>

      {/* TOP BRAND */}
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-10 sm:right-10 sm:top-8 lg:left-12 lg:right-12">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan/30 bg-cyan/5 text-cyan"
          >
            <Rocket size={16} strokeWidth={1.5} />
          </motion.div>
          <span className="font-space-grotesk text-sm font-semibold tracking-[-0.02em]">
            ARCHIES<span className="text-cyan">WILLIAM</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />
          <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30">System Online</span>
        </div>
      </div>

      {/* CENTER — ORBITAL SEQUENCE (no progress/countdown) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px]">
            <OrbitPath size={400} duration={22} dotSize={5} color="#22D3EE" startAngle={20} opacity={0.14} />
            <OrbitPath size={310} duration={16} reverse dotSize={6} color="#A78BFA" startAngle={140} opacity={0.16} />
            <OrbitPath size={220} duration={11} dotSize={4} color="#FDBA74" startAngle={250} opacity={0.2} />

            {/* Central glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl"
            />

            {/* Core */}
            <motion.div
              animate={{ scale: [1, 1.02, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/20 bg-gradient-to-br from-space via-space-navy to-primary/20 shadow-[0_0_80px_rgba(34,211,238,0.15)] sm:h-32 sm:w-32"
            >
              <div className="absolute inset-1 rounded-full border border-white/5" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/5 to-purple/10" />
              <div className="absolute left-1/4 top-1/3 h-8 w-8 rounded-full bg-white/5 blur-sm" />
              <div className="absolute bottom-1/4 right-1/4 h-6 w-6 rounded-full bg-cyan/5 blur-sm" />
              <Globe size={36} strokeWidth={1.2} className="text-cyan/80" />
            </motion.div>
          </div>

          {/* STATUS — cycling phrase, no percentage */}
          <div className="-mt-2 text-center">
            <div className="flex items-center justify-center gap-3">
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              />
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="font-inter text-[10px] font-medium uppercase tracking-[0.3em] text-white/50"
                >
                  {STATUS_MESSAGES[statusIndex]}
                </motion.p>
              </AnimatePresence>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              />
            </div>

            {/* Status indicators */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  <Radio size={12} className="text-cyan/60" />
                </motion.div>
                <span className="font-inter text-[8px] uppercase tracking-[0.18em] text-white/30">Signal</span>
              </div>

              <span className="h-3 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                  <Satellite size={12} className="text-white/30" />
                </motion.div>
                <span className="font-inter text-[8px] uppercase tracking-[0.18em] text-white/30">Orbit</span>
              </div>

              <span className="h-3 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  <Sparkles size={12} className="text-purple/50" />
                </motion.div>
                <span className="font-inter text-[8px] uppercase tracking-[0.18em] text-white/30">Navigation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SYSTEM INFO */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-10 sm:right-10 lg:left-12 lg:right-12">
        <div>
          <p className="font-inter text-[8px] uppercase tracking-[0.2em] text-white/20">Mission Control</p>
          <div className="mt-1 flex items-center gap-2">
            <Orbit size={12} className="text-cyan/30" />
            <p className="font-space-grotesk text-xs text-white/40">EARTH · 001</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-inter text-[8px] uppercase tracking-[0.2em] text-white/20">Destination</p>
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-1 font-space-grotesk text-xs text-cyan/60"
          >
            BEYOND THE HORIZON
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;