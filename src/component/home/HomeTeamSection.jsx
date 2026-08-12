import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Linkedin,
  MapPin,
  Radio,
  Sparkles,
} from "lucide-react";

const HomeTeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const team = [
    {
      id: "01",
      name: "Alex Morgan",
      role: "Founder & Mission Director",
      shortRole: "MISSION DIRECTOR",
      description:
        "Leading the vision behind our exploration program and building the systems that will take the next generation of explorers beyond Earth.",
      location: "Mission Control · Earth",
      email: "alex@cosmoventures.com",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "02",
      name: "Maya Anderson",
      role: "Chief Technology Officer",
      shortRole: "CHIEF TECHNOLOGY OFFICER",
      description:
        "Designing autonomous systems and advanced technologies that allow spacecraft to operate reliably in the most challenging environments.",
      location: "Technology Division · Earth",
      email: "maya@cosmoventures.com",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "03",
      name: "Daniel Carter",
      role: "Head of Space Operations",
      shortRole: "SPACE OPERATIONS",
      description:
        "Coordinating mission operations, orbital strategy and the teams responsible for turning complex space missions into reality.",
      location: "Operations Center · Earth",
      email: "daniel@cosmoventures.com",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "04",
      name: "Sophia Williams",
      role: "Director of Future Exploration",
      shortRole: "FUTURE EXPLORATION",
      description:
        "Exploring the destinations and technologies that will define humanity's next chapter beyond the Moon and Mars.",
      location: "Exploration Lab · Earth",
      email: "sophia@cosmoventures.com",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const activeMember = team[activeIndex];

  const nextMember = () => {
    setActiveIndex((current) =>
      current === team.length - 1 ? 0 : current + 1
    );
  };

  const previousMember = () => {
    setActiveIndex((current) =>
      current === 0 ? team.length - 1 : current - 1
    );
  };

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-space py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.04, 0.09, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-100px]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan
            blur-[170px]
          "
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-150px]
            right-[-100px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-purple
            blur-[180px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Orbital ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-[-180px]
            top-[20%]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-cyan/5
          "
        >
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan/60" />
        </motion.div>
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
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

              <span className="text-white/40">
                behind the
              </span>{" "}

              <span className="bg-gradient-to-r from-cyan via-primary to-purple bg-clip-text text-transparent">
                mission.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <p className="max-w-[420px] font-inter text-sm leading-6 text-text-muted lg:text-right">
              Scientists, engineers, explorers and dreamers working together
              to push the boundaries of what is possible.
            </p>
          </motion.div>
        </div>

        {/* ===================================================
            TEAM SLIDER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 65,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 lg:mt-20"
        >

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025]">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeMember.id}
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -60,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  grid
                  min-h-[600px]
                  grid-cols-1
                  lg:grid-cols-[0.9fr_1.1fr]
                "
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="group relative min-h-[420px] overflow-hidden lg:min-h-[600px]">

                  <motion.img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                    initial={{
                      scale: 1.08,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />

                  {/* Image overlays */}

                  <div className="absolute inset-0 bg-gradient-to-t from-space via-space/10 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-space/20" />

                  {/* Crew status */}

                  <div className="absolute left-6 top-6 sm:left-8 sm:top-8">

                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md">

                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-50" />

                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                      </span>

                      <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/80">
                        CREW MEMBER
                      </span>

                    </div>
                  </div>

                  {/* Large number */}

                  <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-8">

                    <span className="font-space-grotesk text-8xl font-semibold tracking-[-0.08em] text-white/10 sm:text-[120px]">
                      {activeMember.id}
                    </span>

                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">

                  {/* Top */}

                  <div>

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <Sparkles
                          size={15}
                          className="text-cyan"
                        />

                        <span className="font-inter text-[9px] uppercase tracking-[0.22em] text-white/30">
                          {activeMember.shortRole}
                        </span>

                      </div>

                      <span className="font-space-grotesk text-xs text-white/20">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(team.length).padStart(2, "0")}
                      </span>

                    </div>

                    <h3 className="mt-12 font-space-grotesk text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                      {activeMember.name}
                    </h3>

                    <p className="mt-3 font-space-grotesk text-lg text-cyan/80">
                      {activeMember.role}
                    </p>

                    <p className="mt-7 max-w-[540px] font-inter text-sm leading-7 text-text-muted sm:text-base">
                      {activeMember.description}
                    </p>

                  </div>

                  {/* Bottom */}

                  <div className="mt-10">

                    {/* Contact information */}

                    <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-2">

                      {/* Location */}

                      <div className="flex items-center gap-3 py-5">

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            text-white/40
                          "
                        >
                          <MapPin size={14} />
                        </span>

                        <div>
                          <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                            Location
                          </p>

                          <p className="mt-1 font-inter text-xs text-white/60">
                            {activeMember.location}
                          </p>
                        </div>

                      </div>

                      {/* Email */}

                      <a
                        href={`mailto:${activeMember.email}`}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          border-t
                          border-white/10
                          py-5
                          sm:border-l
                          sm:border-t-0
                          sm:pl-5
                        "
                      >

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            text-white/40
                            transition-all
                            duration-300
                            group-hover:border-cyan/30
                            group-hover:bg-cyan/10
                            group-hover:text-cyan
                          "
                        >
                          <Mail size={14} />
                        </span>

                        <div className="min-w-0">

                          <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                            Contact
                          </p>

                          <p className="mt-1 truncate font-inter text-xs text-white/60 group-hover:text-white">
                            {activeMember.email}
                          </p>

                        </div>

                      </a>

                    </div>

                    {/* Buttons */}

                    <div className="mt-7 flex flex-wrap items-center gap-3">

                      <a
                        href={`mailto:${activeMember.email}`}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-full
                          bg-white
                          px-5
                          py-3
                          font-inter
                          text-sm
                          font-medium
                          text-space-navy
                        "
                      >
                        Contact Member

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-space-navy text-white">
                          <ArrowUpRight size={12} />
                        </span>

                      </a>

                      <a
                        href="#"
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          text-white/50
                          transition-all
                          duration-300
                          hover:border-cyan/40
                          hover:bg-cyan/10
                          hover:text-cyan
                        "
                        aria-label={`LinkedIn - ${activeMember.name}`}
                      >
                        <Linkedin size={16} />
                      </a>

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>
          </div>

          {/* =================================================
              SLIDER CONTROLS
          ================================================== */}

          <div className="mt-6 flex items-center justify-between">

            {/* Progress */}

            <div className="flex items-center gap-3">

              {team.map((member, index) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${member.name}`}
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
                        activeIndex === index
                          ? "w-12 bg-cyan"
                          : "w-5 bg-white/15 group-hover:bg-white/40"
                      }
                    `}
                  />
                </button>
              ))}

            </div>

            {/* Navigation */}

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={previousMember}
                aria-label="Previous team member"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-white/50
                  transition-all
                  duration-300
                  hover:border-cyan/40
                  hover:bg-cyan/10
                  hover:text-cyan
                "
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextMember}
                aria-label="Next team member"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-white/50
                  transition-all
                  duration-300
                  hover:border-cyan/40
                  hover:bg-cyan/10
                  hover:text-cyan
                "
              >
                <ArrowRight size={17} />
              </button>

            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM CREW STATUS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div className="flex items-center gap-3">

            <Radio
              size={15}
              className="text-cyan"
            />

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