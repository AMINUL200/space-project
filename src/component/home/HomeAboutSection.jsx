import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Rocket,
  Orbit,
  Telescope,
  Satellite,
} from "lucide-react";

/* =========================================================
   STARFIELD CANVAS
   Ambient, twinkling background — replaces flat blurred
   glow blobs with something that actually reads as "space".
========================================================= */
const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars = [];
    let frameId;
    let width, height;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const density = Math.floor((width * height) / 9000);
      stars = Array.from({ length: density }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.2,
        baseOpacity: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.4 + 0.15,
      }));
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,236,241,${s.baseOpacity})`;
        ctx.fill();
      });
    };

    let t = 0;
    const animate = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);
      stars.forEach((s) => {
        const twinkle = Math.sin(t * s.speed + s.phase) * 0.35;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,236,241,${Math.max(
          0,
          s.baseOpacity + twinkle
        )})`;
        ctx.fill();
      });
      frameId = requestAnimationFrame(animate);
    };

    resize();
    if (prefersReducedMotion) {
      drawStatic();
    } else {
      animate();
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
};

/* =========================================================
   MISSION ELAPSED TIME
   Live HH:MM:SS ticker in the eyebrow — a small, real
   signature detail rather than decoration.
========================================================= */
const useMissionClock = () => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
  const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
  const s = String(elapsed % 60).padStart(2, "0");
  return `T+${h}:${m}:${s}`;
};

const HomeAboutSection = () => {
  const met = useMissionClock();

  const stats = [
    { value: "15+", label: "MISSIONS_LAUNCHED" },
    { value: "08", label: "RESEARCH_PROGRAMS" },
    { value: "24/7", label: "MONITORING_STATUS" },
  ];

  const modules = [
    {
      code: "MDL-01",
      icon: Rocket,
      title: "Mission Driven",
      description:
        "We transform ambitious ideas into meaningful missions designed to push the boundaries of exploration.",
    },
    {
      code: "MDL-02",
      icon: Orbit,
      title: "Beyond Boundaries",
      description:
        "From Earth orbit to distant worlds, we build experiences around the future of human exploration.",
    },
    {
      code: "MDL-03",
      icon: Telescope,
      title: "Future Focused",
      description:
        "Science, technology and imagination come together to create what comes next.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-space py-24 sm:py-32 lg:py-40"
    >
      {/* Starfield */}
      <StarField />

      {/* Fine grid, kept very subtle so the stars read as the texture */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.02]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Vignette instead of colored blur blobs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,4,10,0.75)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ===================================================
            TRANSMISSION LOG HEADER
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4"
        >
          <div className="flex items-center gap-3">
            <Satellite size={14} className="text-cyan" strokeWidth={1.75} />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-cyan">
              Transmission Log — About CosmoVentures
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.1em] text-text-disabled">
            {met} <span className="text-white/20">·</span> ORBITAL LINK ACTIVE
          </span>
        </motion.div>

        {/* ===================================================
            SECTION INTRO
        ==================================================== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="max-w-[650px] font-space-grotesk text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-text-primary sm:text-5xl md:text-6xl lg:text-[64px]">
              We don't just
              <br />
              <span className="text-white/45">look at the stars.</span>
              <br />
              We move
              <br />
              <span className="bg-gradient-to-r from-cyan via-primary to-purple bg-clip-text text-transparent">
                toward them.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-end"
          >
            <p className="max-w-[650px] font-inter text-lg leading-8 text-text-muted sm:text-xl">
              CosmoVentures is building a future where exploration is
              accessible, intelligent and limitless. We bring together
              science, technology and human curiosity to create the next
              generation of space experiences.
            </p>

            <p className="mt-6 max-w-[600px] font-inter text-sm leading-7 text-text-disabled">
              From ambitious missions to breakthrough technologies, our
              journey is driven by one simple belief — the greatest
              discoveries are still ahead of us.
            </p>

            <motion.a
              href="#missions"
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-8 flex w-fit items-center gap-3 rounded-full font-inter text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space"
            >
              <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover:border-cyan">
                Discover Our Mission
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-cyan group-hover:bg-cyan group-hover:text-space">
                <ArrowUpRight size={15} />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* ===================================================
            SCAN-LINE DIVIDER
        ==================================================== */}
        <div className="relative mt-20 h-px overflow-hidden bg-white/10 lg:mt-28">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan/70 to-transparent"
          />
        </div>

        {/* ===================================================
            TELEMETRY STRIP
        ==================================================== */}
        <div className="grid grid-cols-1 border-b border-white/10 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative py-8 sm:px-6 lg:py-10 ${
                index !== 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""
              }`}
            >
              <div className="font-space-grotesk text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.14em] text-text-disabled">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===================================================
            MODULE READOUTS
        ==================================================== */}
        <div className="mt-20 lg:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-disabled">
                Active Systems
              </p>
              <h3 className="mt-3 font-space-grotesk text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
                Built for the next frontier.
              </h3>
            </div>
            <p className="max-w-[380px] font-inter text-sm leading-6 text-text-muted">
              Three principles guide every mission, every technology and
              every experience we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.code}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-colors duration-500 hover:bg-white/[0.04] sm:p-8"
                >
                  {/* Targeting reticle corners — appear on hover */}
                  {[
                    "left-3 top-3 border-l border-t",
                    "right-3 top-3 border-r border-t",
                    "left-3 bottom-3 border-l border-b",
                    "right-3 bottom-3 border-r border-b",
                  ].map((pos) => (
                    <span
                      key={pos}
                      className={`pointer-events-none absolute h-3 w-3 border-cyan/0 transition-all duration-300 group-hover:border-cyan/70 ${pos}`}
                    />
                  ))}

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-text-disabled">
                      {mod.code}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/10 group-hover:text-cyan">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8 sm:right-8">
                    <h4 className="font-space-grotesk text-2xl font-medium tracking-[-0.025em] text-white">
                      {mod.title}
                    </h4>
                    <p className="mt-3 max-w-[340px] font-inter text-sm leading-6 text-text-muted">
                      {mod.description}
                    </p>
                    <div className="mt-5 h-px w-0 bg-cyan transition-all duration-500 group-hover:w-16" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;