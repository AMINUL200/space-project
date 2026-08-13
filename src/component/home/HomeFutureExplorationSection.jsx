import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Globe2,
  Moon,
  Telescope,
  Sparkles,
  CircleDot,
  Satellite,
  Cpu,
  Radar,
  Eye,
  Camera,
  Microscope,
  Database,
  Lightbulb,
} from "lucide-react";

/* =========================================================
   ORBIT PATH
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
};

const HomeFutureExplorationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cards = [
    {
      id: "01",
      title: "Ground Control Systems",
      icon: Satellite,
      description:
        "Our ground-control solutions support satellite communication, monitoring, data management and mission operations.",
      image: "/image/gcs.jpeg",
    },
    {
      id: "02",
      title: "Constellation Management",
      icon: Globe2,
      description:
        "We support integrated systems for managing satellite constellations, improving operational efficiency and access to mission data.",
      image: "/image/cm.jpeg",
    },
    {
      id: "03",
      title: "Space Domain Awareness",
      icon: Radar,
      description:
        "Our data-driven technologies help organizations monitor and understand objects and activities within the space environment.",
      image: "/image/sda.jpeg",
    },
    {
      id: "04",
      title: "Earth Observation & Science",
      icon: Eye,
      description:
        "We support advanced sensing and observation technologies for environmental monitoring, scientific research and Earth-system analysis.",
      image: "/image/eos.jpeg",
    },
    {
      id: "05",
      title: "Advanced Sensing & Imaging",
      icon: Camera,
      description:
        "Our capabilities include optical, infrared, radiation detection and imaging technologies for space and scientific applications.",
      image: "/image/asi.jpeg",
    },
    {
      id: "06",
      title: "Scientific Instrumentation",
      icon: Microscope,
      description:
        "We focus on advanced instruments and detection technologies designed for demanding research and operational environments.",
      image: "/image/si.jpeg",
    },
    {
      id: "07",
      title: "Mission Data Processing",
      icon: Database,
      description:
        "Our solutions help collect, process and manage complex data from satellites, sensors and scientific missions.",
      image: "/image/mdp.jpeg",
    },
    {
      id: "08",
      title: "Research & Innovation",
      icon: Lightbulb,
      description:
        "We combine scientific research and engineering expertise to explore innovative solutions for future space and technology applications.",
      image: "/image/ri.jpeg",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getVisibleCards = () => {
    const start = currentIndex * itemsPerPage;
    return cards.slice(start, start + itemsPerPage);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="future" className="relative overflow-hidden bg-space py-8 sm:py-14 lg:py-14">
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

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center" style={{ marginTop: 110 }}>
            <p className="font-inter text-[9px] uppercase tracking-[0.35em] text-cyan">NEXT FRONTIER</p>
            <p className="mt-2 font-space-grotesk text-2xl font-medium text-white sm:text-3xl">Sun</p>
          </div>

          <div className="absolute left-6 top-6 z-20 sm:left-8 sm:top-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/40">
                Exploration Program
              </span>
            </div>
            <p className="mt-2 font-space-grotesk text-sm text-white/70">FUTURE-01</p>
          </div>

          <div className="absolute right-6 top-6 z-20 text-right sm:right-8 sm:top-8">
            <p className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30">Current Status</p>
            <p className="mt-1 font-space-grotesk text-sm text-cyan">EXPLORING</p>
          </div>

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

          
        </motion.div>

        {/* CAPABILITIES SLIDER */}
        <div className="mt-20 lg:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-white/30">Our Capabilities</p>
            <h3 className="mt-3 font-space-grotesk text-3xl font-medium tracking-[-0.035em] text-white sm:text-4xl">
              Technologies that shape the future.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {getVisibleCards().map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-cyan/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-cyan/5"
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-space via-space/40 to-transparent" />
                          
                          {/* ID Badge */}
                          <div className="absolute left-4 top-4">
                            <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-inter text-[8px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                              {card.id}
                            </span>
                          </div>

                          {/* Icon */}
                          <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-cyan transition-all duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/10">
                            <Icon size={20} strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h4 className="font-space-grotesk text-lg font-semibold text-white">
                            {card.title}
                          </h4>
                          <p className="mt-2 font-inter text-sm leading-6 text-text-muted">
                            {card.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                    className="group h-8 py-3"
                  >
                    <span
                      className={`
                        block
                        h-[2px]
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          currentIndex === index
                            ? "w-12 bg-cyan"
                            : "w-5 bg-white/15 group-hover:bg-white/40"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan"
                >
                  <ArrowDownRight size={17} className="rotate-90" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan"
                >
                  <ArrowDownRight size={17} className="-rotate-90" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
};

export default HomeFutureExplorationSection;