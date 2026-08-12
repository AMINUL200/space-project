import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Globe2,
  Moon,
  Telescope,
  Sparkles,
  CircleDot,
} from "lucide-react";

/* =========================================================
   ORBIT PATH
   A single ring with one planet dot. All rings rotate the
   same direction — outer rings run slower, mirroring real
   orbital mechanics (farther planets orbit more slowly).
========================================================= */
const OrbitPath = ({ size, duration, dotSize, color, startAngle = 0, ringOpacity = 0.14 }) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full"
      style={{
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        border: `1px solid ${color}`,
        borderColor: `${color}${Math.round(ringOpacity * 255).toString(16).padStart(2, "0")}`,
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="relative h-full w-full rounded-full"
        style={{ transform: `rotate(${startAngle}deg)` }}
      >
        {/* soft trail glow */}
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
        {/* planet */}
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
};

const HomeFutureExplorationSection = () => {
  const milestones = [
    {
      year: "2027",
      title: "Beyond Lunar Orbit",
      description:
        "Expanding exploration beyond the Moon and developing the systems required for deeper missions.",
      icon: Moon,
    },
    {
      year: "2030",
      title: "Mars Preparation",
      description:
        "Advancing navigation, communication and autonomous technologies for the next generation of Mars missions.",
      icon: Globe2,
    },
    {
      year: "2035+",
      title: "Deep Space",
      description:
        "Opening a new chapter of exploration beyond Mars and toward the unexplored frontier.",
      icon: Telescope,
    },
  ];

  return (
    <section id="future" className="relative overflow-hidden bg-space py-24 sm:py-32 lg:py-40">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[25%] top-[15%] h-[600px] w-[600px] rounded-full bg-purple blur-[180px]"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[40%] h-[450px] w-[450px] rounded-full bg-cyan blur-[160px]"
        />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan" />
              <span className="font-inter text-[11px] font-medium uppercase tracking-[0.28em] text-cyan">
                Future Exploration
              </span>
            </div>
            <h2 className="font-space-grotesk text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[70px]">
              The future is not
              <br />
              <span className="text-white/40">somewhere ahead.</span>
              <br />
              <span className="bg-gradient-to-r from-cyan via-primary to-purple bg-clip-text text-transparent">
                It's ours to explore.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="max-w-[460px] font-inter text-base leading-7 text-text-muted lg:ml-auto lg:text-lg">
              Our journey doesn't end with today's missions. We're building
              the technologies, systems and imagination required for the
              generations that will explore what comes next.
            </p>
          </motion.div>
        </div>

        {/* CINEMATIC FUTURE PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 min-h-[650px] overflow-hidden rounded-[30px] border border-white/10 bg-[#050817] lg:mt-20"
        >
          {/* SOLAR SYSTEM — same-direction orbits, varied speed & color,
              outer rings slower (matches real orbital mechanics) */}
          <OrbitPath size={220} duration={16} dotSize={5} color="#9CA3AF" startAngle={40} ringOpacity={0.18} />
          <OrbitPath size={310} duration={26} dotSize={6} color="#FDBA74" startAngle={140} ringOpacity={0.16} />
          <OrbitPath size={400} duration={38} dotSize={7} color="#22D3EE" startAngle={230} ringOpacity={0.14} />
          <OrbitPath size={490} duration={52} dotSize={6} color="#F87171" startAngle={10} ringOpacity={0.12} />
          <OrbitPath size={580} duration={70} dotSize={8} color="#A78BFA" startAngle={190} ringOpacity={0.1} />
          <OrbitPath size={660} duration={92} dotSize={5} color="#5EEAD4" startAngle={300} ringOpacity={0.08} />

          {/* Central sun */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#FDBA74] via-[#FB923C]/70 to-primary/40 shadow-[0_0_100px_rgba(251,146,60,0.35)] sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.45),transparent_20%),radial-gradient(circle_at_65%_65%,rgba(251,146,60,0.4),transparent_45%)]" />
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute left-[20%] top-[16%] h-[30%] w-[38%] rounded-full bg-white/15 blur-2xl" />
          </motion.div>

          {/* Center label */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center" style={{ marginTop: 110 }}>
            <p className="font-inter text-[9px] uppercase tracking-[0.35em] text-cyan">NEXT FRONTIER</p>
            <p className="mt-2 font-space-grotesk text-2xl font-medium text-white sm:text-3xl">Sun</p>
          </div>

          {/* Top left status */}
          <div className="absolute left-6 top-6 z-20 sm:left-8 sm:top-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/40">
                Exploration Program
              </span>
            </div>
            <p className="mt-2 font-space-grotesk text-sm text-white/70">FUTURE-01</p>
          </div>

          {/* Top right */}
          <div className="absolute right-6 top-6 z-20 text-right sm:right-8 sm:top-8">
            <p className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30">Current Status</p>
            <p className="mt-1 font-space-grotesk text-sm text-cyan">EXPLORING</p>
          </div>

          {/* Bottom left text */}
          <div className="absolute bottom-6 left-6 z-20 max-w-[380px] sm:bottom-8 sm:left-8">
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-cyan">Where we're going</p>
            <h3 className="mt-3 font-space-grotesk text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
              From the Moon
              <br />
              to the unknown.
            </h3>
            <p className="mt-4 font-inter text-sm leading-6 text-white/45">
              Every milestone brings us closer to a future where distance is
              no longer a limit to human curiosity.
            </p>
          </div>

          {/* Bottom right CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="absolute bottom-6 right-6 z-20 flex items-center gap-3 rounded-full bg-white px-5 py-3 font-inter text-xs font-medium text-space-navy shadow-2xl sm:bottom-8 sm:right-8 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Join the Journey
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-space-navy text-white">
              <ArrowUpRight size={12} />
            </span>
          </motion.a>
        </motion.div>

        {/* FUTURE TIMELINE */}
        <div className="mt-20 lg:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-white/30">Our trajectory</p>
            <h3 className="mt-3 font-space-grotesk text-3xl font-medium tracking-[-0.035em] text-white sm:text-4xl">
              A roadmap beyond the horizon.
            </h3>
          </motion.div>

          <div className="relative mt-12">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-white/10 to-transparent md:left-0 md:right-0 md:top-[22px] md:h-px md:w-auto" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-12 md:pl-0"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-[10px] top-[10px] flex h-4 w-4 items-center justify-center rounded-full border border-cyan/40 bg-space md:static md:mb-7 md:h-11 md:w-11"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                      <Icon size={17} className="absolute hidden text-cyan md:block" strokeWidth={1.5} />
                    </motion.div>

                    <div className="border-b border-white/10 pb-8 md:border-none md:pb-0">
                      <div className="flex items-center justify-between md:block">
                        <span className="font-space-grotesk text-3xl font-medium text-white">{milestone.year}</span>
                        <ArrowDownRight size={18} className="text-white/20 md:hidden" />
                      </div>
                      <h4 className="mt-3 font-space-grotesk text-xl font-medium text-white md:text-2xl">
                        {milestone.title}
                      </h4>
                      <p className="mt-3 max-w-[360px] font-inter text-sm leading-6 text-text-muted">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FINAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/10 pt-10 lg:mt-32 lg:pt-14"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-start gap-4">
              <Sparkles size={20} className="mt-2 shrink-0 text-cyan" />
              <div>
                <p className="font-inter text-sm text-white/40">The destination is unknown.</p>
                <h3 className="mt-2 max-w-[700px] font-space-grotesk text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  That's exactly why
                  <span className="text-white/40"> we're going.</span>
                </h3>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="group flex w-fit items-center gap-3 font-inter text-sm font-medium text-white"
            >
              <span className="border-b border-white/20 pb-1 transition-colors duration-300 group-hover:border-cyan">
                Become part of the future
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-cyan group-hover:bg-cyan group-hover:text-space">
                <ArrowUpRight size={15} />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFutureExplorationSection;