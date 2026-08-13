import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MapPin,
  Radio,
  Phone,
} from "lucide-react";

const GAP = 24; // px — matches gap-6

const HomeTeamSection = () => {
  const team = [
    {
      id: "01",
      name: "Nicholas Horsburgh",
      role: "President & CEO",
      shortRole: "PRESIDENT & CEO",
      description:
        "Leading the vision and strategic direction of ARCHIES WILLIAM PVT LTD. With decades of experience in technology and scientific solutions, Nicholas drives the company's mission of innovation and excellence.",
      location: "Washington DC, USA",
      email: "nicholas@archieswilliam.com",
      phone: "+1 (410) 730-2656",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "02",
      name: "R. N. Chandra",
      role: "India Head",
      shortRole: "INDIA HEAD",
      description:
        "Leading operations and strategic initiatives in India. With extensive experience in technology management and business development, R.N. Chandra drives the company's growth in the Indian market.",
      location: "New Delhi, India",
      email: "rn.chandra@archieswilliam.com",
      phone: "+91 9873999392",
      image:
        "/image/n_charan.jpeg",
    },
    {
      id: "03",
      name: "Dr. Arjun Mehta",
      role: "Chief Scientific Officer",
      shortRole: "CHIEF SCIENTIFIC OFFICER",
      description:
        "Overseeing scientific research and development programs. Dr. Mehta brings expertise in space technology, metallurgy, and advanced materials, driving innovation across the organization.",
      location: "Kolkata, India",
      email: "arjun.mehta@archieswilliam.com",
      phone: "+91 7550755553",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "04",
      name: "Ananya Sharma",
      role: "Director, Space Systems",
      shortRole: "SPACE SYSTEMS DIRECTOR",
      description:
        "Leading the design and development of space systems and satellite technologies. Ananya specializes in advanced sensing, Earth observation systems, and mission-critical technologies.",
      location: "Arlington, Virginia, USA",
      email: "ananya.sharma@archieswilliam.com",
      phone: "+1 (410) 730-2656",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "05",
      name: "Daniel Williams",
      role: "Director, Engineering",
      shortRole: "ENGINEERING DIRECTOR",
      description:
        "Leading engineering teams in the development of advanced technology solutions. Daniel brings extensive experience in scientific instrumentation, data processing, and mission-support technologies.",
      location: "Washington DC, USA",
      email: "daniel.williams@archieswilliam.com",
      phone: "+1 (410) 730-2656",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "06",
      name: "Dr. Priya Nair",
      role: "Head of Earth Observation",
      shortRole: "EARTH OBSERVATION HEAD",
      description:
        "Leading Earth observation programs and satellite data analytics. Dr. Nair specializes in remote sensing, environmental monitoring, and scientific data interpretation.",
      location: "Kolkata, India",
      email: "priya.nair@archieswilliam.com",
      phone: "+91 7550755553",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const viewportRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [step, setStep] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, team.length - visibleCount);

  // Determine how many cards are visible per breakpoint (matches
  // the site's existing md/lg grid convention) and measure the
  // actual rendered card width so the shift-by-one-card offset
  // is pixel-accurate at every screen size.
  const recalc = useCallback(() => {
    const width = window.innerWidth;
    const count = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
    setVisibleCount(count);

    if (viewportRef.current) {
      const viewportWidth = viewportRef.current.offsetWidth;
      const cardWidth = (viewportWidth - GAP * (count - 1)) / count;
      setStep(cardWidth + GAP);
    }
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, Math.max(0, team.length - visibleCount)));
  }, [visibleCount, team.length]);

  const nextSlide = () => setCurrentIndex((i) => Math.min(i + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((i) => Math.max(i - 1, 0));

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === maxIndex;

  return (
    <section id="team" className="relative overflow-hidden bg-space py-8 sm:py-14 lg:py-14">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-100px] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan blur-[170px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-150px] right-[-100px] h-[550px] w-[550px] rounded-full bg-purple blur-[180px]"
        />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute left-[-180px] top-[20%] h-[600px] w-[600px] rounded-full border border-cyan/5"
        >
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan/60" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan" />
              <span className="font-inter text-[11px] font-medium uppercase tracking-[0.28em] text-cyan">
                Mission Crew
              </span>
            </div>
            <h2 className="font-space-grotesk text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
              Meet the people
              <br />
              <span className="text-white/40">behind the</span>{" "}
              <span className="bg-gradient-to-r from-cyan via-primary to-purple bg-clip-text text-transparent">
                mission.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="max-w-[420px] font-inter text-sm leading-6 text-text-muted lg:text-right">
              Scientists, engineers, explorers and leaders working together
              to push the boundaries of what is possible.
            </p>
          </motion.div>
        </div>

        {/* TEAM CAROUSEL — single continuous track, shifts one card at a time */}
        <motion.div
          initial={{ opacity: 0, y: 65 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 lg:mt-20"
        >
          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              animate={{ x: -currentIndex * step }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
              style={{ gap: GAP }}
            >
              {team.map((member) => (
                <div
                  key={member.id}
                  className="group relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-cyan/30 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-cyan/5"
                  style={{
                    width: `calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})`,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space via-space/20 to-transparent" />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-inter text-[8px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                        {member.shortRole}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <span className="font-space-grotesk text-4xl font-semibold text-white/10">
                        {member.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-space-grotesk text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-cyan/70">{member.role}</p>

                    <div className="mt-3 flex items-center gap-2">
                      <MapPin size={12} className="text-white/30" />
                      <span className="font-inter text-xs text-white/40">{member.location}</span>
                    </div>

                    <p className="mt-3 font-inter text-sm leading-6 text-text-muted line-clamp-3">
                      {member.description}
                    </p>

                    <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                      {member.email && (
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <Mail size={12} className="text-cyan/40" />
                          <span className="truncate">{member.email}</span>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <Phone size={12} className="text-cyan/40" />
                          <span>{member.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CONTROLS */}
          <div className="mt-8 flex items-center justify-between">
            {/* Position dots — one per possible track position */}
            <div className="flex items-center gap-3">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to position ${index + 1}`}
                  className="group h-8 py-3"
                >
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-500 ${
                      currentIndex === index
                        ? "w-12 bg-cyan"
                        : "w-5 bg-white/15 group-hover:bg-white/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                disabled={isAtStart}
                aria-label="Previous team members"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-white/[0.02] disabled:hover:text-white/50"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                disabled={isAtEnd}
                aria-label="Next team members"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-white/[0.02] disabled:hover:text-white/50"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM CREW STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <Radio size={15} className="text-cyan" />
            <span className="font-inter text-[10px] uppercase tracking-[0.22em] text-white/30">
              Mission Crew · Earth Station
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            <span className="font-inter text-[10px] uppercase tracking-[0.18em] text-cyan/60">
              All Systems Operational
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTeamSection;