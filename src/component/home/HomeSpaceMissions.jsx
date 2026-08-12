import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Rocket,
  Satellite,
  Globe2,
  Orbit,
  CircleDot,
} from "lucide-react";

const HomeSpaceMissions = () => {
  const missions = [
    {
      id: "01",
      title: "Lunar Horizon",
      category: "LUNAR EXPLORATION",
      description:
        "A next-generation lunar expedition focused on mapping unexplored regions and preparing the foundation for long-term human exploration.",
      status: "MISSION ACTIVE",
      date: "2026",
      distance: "384,400 km",
      icon: Globe2,
      video: "/video/lunar-horizon.mp4",
      poster: "/video/lunar-horizon-poster.jpg",
      featured: true,
    },
    {
      id: "02",
      title: "Mars Frontier",
      category: "DEEP SPACE",
      description: "Exploring the possibilities of future human missions to Mars.",
      status: "IN DEVELOPMENT",
      date: "2028",
      distance: "225M km",
      icon: Rocket,
      video: "/video/mars-frontier.mp4",
      poster: "/video/mars-frontier-poster.jpg",
    },
    {
      id: "03",
      title: "Orbital Nexus",
      category: "ORBITAL TECHNOLOGY",
      description:
        "Building smarter orbital infrastructure for the next generation of space operations.",
      status: "RESEARCH",
      date: "2027",
      distance: "408 km",
      icon: Satellite,
      video: "/video/orbital-nexus.mp4",
      poster: "/video/orbital-nexus-poster.jpg",
    },
  ];

  return (
    <section id="missions" className="relative overflow-hidden bg-space py-24 sm:py-32 lg:py-40">
      {/* Background (unchanged) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-purple/10 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-cyan/10"
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header (unchanged) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan" />
              <span className="font-inter text-[11px] font-medium uppercase tracking-[0.28em] text-cyan">
                Space Missions
              </span>
            </div>
            <h2 className="max-w-[800px] font-space-grotesk text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
              Missions that take
              <br />
              <span className="text-white/40">us beyond</span>{" "}
              <span className="bg-gradient-to-r from-cyan via-primary to-purple bg-clip-text text-transparent">
                Earth.
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
              Every mission is a step into the unknown. Explore the
              expeditions, technologies and discoveries shaping our journey
              through space.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="mt-14 origin-left border-t border-white/10 pt-5"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CircleDot size={14} className="text-cyan" />
              <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-white/40">
                Active Mission Program
              </span>
            </div>
            <span className="font-space-grotesk text-xs text-white/30">01 — 03</span>
          </div>
        </motion.div>

        {/* FEATURED MISSION — now video */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] shadow-2xl"
        >
          <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative min-h-[380px] overflow-hidden lg:min-h-[560px]">
              <video
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                src={missions[0].video}
                poster={missions[0].poster}
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute inset-0 bg-gradient-to-t from-space via-space/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-space/30" />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md sm:left-8 sm:top-8">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                <span className="font-inter text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                  {missions[0].status}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <p className="mb-2 font-inter text-[10px] uppercase tracking-[0.25em] text-cyan">
                  {missions[0].category}
                </p>
                <h3 className="font-space-grotesk text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  {missions[0].title}
                </h3>
              </div>
            </div>

            <div className="relative flex flex-col justify-between bg-white/[0.025] p-7 sm:p-9 lg:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-space-grotesk text-5xl font-medium text-white/10">
                    {missions[0].id}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cyan">
                    <Globe2 size={21} strokeWidth={1.5} />
                  </div>
                </div>
                <p className="mt-10 font-inter text-base leading-7 text-text-muted">
                  {missions[0].description}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 border-y border-white/10">
                <div className="border-r border-white/10 py-5">
                  <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/30">Launch</p>
                  <p className="mt-2 font-space-grotesk text-lg text-white">{missions[0].date}</p>
                </div>
                <div className="py-5 pl-5">
                  <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/30">Distance</p>
                  <p className="mt-2 font-space-grotesk text-lg text-white">{missions[0].distance}</p>
                </div>
              </div>

              <motion.a
                href="#mission-details"
                whileHover={{ x: 5 }}
                className="group/link mt-8 flex items-center justify-between border-t border-white/10 pt-5"
              >
                <span className="font-inter text-sm font-medium text-white">Explore Mission</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 group-hover/link:border-cyan group-hover/link:bg-cyan group-hover/link:text-space">
                  <ArrowUpRight size={16} />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* SECONDARY MISSIONS — now video */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {missions.slice(1).map((mission, index) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -7 }}
                className="group relative min-h-[380px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.025] transition-colors duration-500 hover:border-cyan/30"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <video
                    className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-[1.06] group-hover:opacity-75"
                    src={mission.video}
                    poster={mission.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space via-space/50 to-transparent" />
                </div>

                <div className="relative flex h-full flex-col justify-between p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="font-space-grotesk text-4xl font-medium text-white/15">
                      {mission.id}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 group-hover:border-cyan/40 group-hover:text-cyan">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-cyan">
                        {mission.status}
                      </span>
                    </div>
                    <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-white/40">
                      {mission.category}
                    </p>
                    <h3 className="mt-2 font-space-grotesk text-3xl font-medium tracking-[-0.035em] text-white">
                      {mission.title}
                    </h3>
                    <p className="mt-3 max-w-[430px] font-inter text-sm leading-6 text-white/55">
                      {mission.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="font-space-grotesk text-sm text-white/60">{mission.date}</span>
                      <ArrowUpRight size={18} className="text-white/40 transition-all duration-300 group-hover:text-cyan" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-inter text-sm text-white/50">More missions are already on the horizon.</p>
            <p className="mt-1 font-space-grotesk text-xl text-white">The journey has only just begun.</p>
          </div>
          <motion.a
            href="#future"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 rounded-full bg-white px-6 py-3 font-inter text-sm font-medium text-space-navy shadow-xl"
          >
            View Future Missions
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-space-navy text-white">
              <ArrowUpRight size={12} />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSpaceMissions;