import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Rocket,
  Orbit,
  Telescope,
  Satellite,
  Globe,
  Cpu,
  Shield,
  Sparkles,
} from "lucide-react";

/* =========================================================
   STARFIELD CANVAS
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

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-space py-10 sm:py-14 lg:py-14"
    >
      {/* Starfield */}
      <StarField />

      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.02]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

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
              Transmission Log — About ARCHIES WILLIAM
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.1em] text-text-disabled">
            {met} <span className="text-white/20">·</span> ORBITAL LINK ACTIVE
          </span>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={16} className="text-cyan" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                About Us
              </span>
            </div>
            <h2 className="font-space-grotesk text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[64px]">
              ARCHIES WILLIAM
              <br />
              <span className="text-white/45">PVT LTD.</span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="font-inter text-lg leading-8 text-text-muted sm:text-xl">
              ARCHIES WILLIAM PVT LTD. is an emerging technology and
              scientific solutions company focused on space, Earth
              observation, advanced sensing, scientific instrumentation
              and mission-support technologies.
            </p>

            <p className="font-inter text-base leading-7 text-text-muted">
              Our vision is to bring together scientific knowledge,
              engineering expertise and advanced technology to develop
              solutions for some of the most challenging requirements in
              the space and Earth sciences sectors.
            </p>

            <p className="font-inter text-base leading-7 text-text-muted">
              From satellite and ground-based systems to sensing, data
              processing and scientific instrumentation, ARCHIES WILLIAM
              aims to support organizations that require reliable,
              intelligent and future-ready technology solutions.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe size={16} className="text-cyan" />
                    <span className="font-inter text-[10px] uppercase tracking-[0.15em] text-cyan">
                      Strategic Presence
                    </span>
                  </div>
                  <p className="font-inter text-sm text-text-muted">
                    With a strategic presence in the{" "}
                    <span className="text-white/80">United States</span> and{" "}
                    <span className="text-white/80">India</span>, the
                    company is positioned to work across international
                    technology, research and scientific ecosystems.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={16} className="text-cyan" />
                    <span className="font-inter text-[10px] uppercase tracking-[0.15em] text-cyan">
                      Our Approach
                    </span>
                  </div>
                  <p className="font-inter text-sm text-text-muted">
                    Our approach is built around{" "}
                    <span className="text-white/80">innovation</span>,{" "}
                    <span className="text-white/80">reliability</span>,{" "}
                    <span className="text-white/80">scientific excellence</span>{" "}
                    and long-term technological development.
                  </p>
                </div>
              </div>
            </div>

            
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
            BOTTOM DIVIDER
        ==================================================== */}
        <div className="relative mt-20 h-px overflow-hidden bg-white/10 lg:mt-28">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-purple/70 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;