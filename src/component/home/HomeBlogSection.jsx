import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

const HomeBlogSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const posts = [
    {
      id: 1,
      category: "SPACE EXPLORATION",
      title: "The Next Era of Human Space Exploration",
      description:
        "From lunar missions to deeper destinations, discover how new technologies are changing the way we explore beyond Earth.",
      date: "12 AUG 2026",
      readTime: "6 MIN READ",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=85",
    },
    {
      id: 2,
      category: "SPACE TECHNOLOGY",
      title: "How Autonomous Systems Are Changing Space Missions",
      description:
        "Intelligent systems are helping spacecraft navigate, communicate and make critical decisions far beyond Earth.",
      date: "05 AUG 2026",
      readTime: "5 MIN READ",
      image:
        "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=1800&q=85",
    },
    {
      id: 3,
      category: "MARS",
      title: "Preparing for the Journey to Mars",
      description:
        "What will it take to turn a Mars expedition from a distant ambition into the next major chapter of exploration?",
      date: "28 JUL 2026",
      readTime: "8 MIN READ",
      image:
        "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1800&q=85",
    },
    {
      id: 4,
      category: "FUTURE EXPLORATION",
      title: "What Comes After the Moon?",
      description:
        "The Moon is only the beginning. Explore the destinations and technologies that could define our next frontier.",
      date: "19 JUL 2026",
      readTime: "7 MIN READ",
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=85",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === posts.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? posts.length - 1 : current - 1
    );
  };

  const activePost = posts[activeIndex];

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-space py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-10%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-primary
            blur-[160px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-10%]
            right-[-5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-purple
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
                From the Journal
              </span>
            </div>

            <h2 className="font-space-grotesk text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
              Stories from
              <br />

              <span className="text-white/40">
                the final
              </span>{" "}

              <span className="bg-gradient-to-r from-cyan via-primary to-purple bg-clip-text text-transparent">
                frontier.
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
            className="flex items-end justify-between gap-8 lg:flex-col lg:items-end"
          >
            <p className="max-w-[400px] font-inter text-sm leading-6 text-text-muted lg:text-right">
              Insights, discoveries and ideas from our journey beyond Earth.
            </p>

            <a
              href="#blog"
              className="group hidden items-center gap-2 font-inter text-sm font-medium text-white sm:flex"
            >
              View All Stories

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-cyan group-hover:bg-cyan group-hover:text-space">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* ===================================================
            SLIDER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025]">

            <AnimatePresence mode="wait">
              <motion.div
                key={activePost.id}
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
                className="grid min-h-[570px] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]"
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="group relative min-h-[350px] overflow-hidden lg:min-h-[570px]">

                  <motion.img
                    src={activePost.image}
                    alt={activePost.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{
                      scale: 1.05,
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

                  {/* Category */}
                  <div className="absolute left-6 top-6 sm:left-8 sm:top-8">

                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md">

                      <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                      <span className="font-inter text-[9px] font-medium uppercase tracking-[0.2em] text-white/80">
                        {activePost.category}
                      </span>

                    </div>
                  </div>

                  {/* Image number */}
                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">

                    <span className="font-space-grotesk text-7xl font-semibold tracking-[-0.06em] text-white/10 sm:text-8xl">
                      {String(activePost.id).padStart(2, "0")}
                    </span>

                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">

                  {/* Top */}
                  <div>

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">
                        <Sparkles
                          size={16}
                          className="text-cyan"
                        />

                        <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30">
                          Featured Story
                        </span>
                      </div>

                      <span className="font-space-grotesk text-xs text-white/20">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(posts.length).padStart(2, "0")}
                      </span>

                    </div>

                    <h3 className="mt-12 max-w-[550px] font-space-grotesk text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                      {activePost.title}
                    </h3>

                    <p className="mt-6 max-w-[500px] font-inter text-sm leading-7 text-text-muted sm:text-base">
                      {activePost.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 border-y border-white/10">

                      <div className="flex items-center gap-3 py-5">
                        <CalendarDays
                          size={16}
                          className="text-white/30"
                        />

                        <div>
                          <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                            Published
                          </p>

                          <p className="mt-1 font-space-grotesk text-sm text-white/70">
                            {activePost.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 border-l border-white/10 py-5 pl-5">
                        <Clock3
                          size={16}
                          className="text-white/30"
                        />

                        <div>
                          <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                            Reading Time
                          </p>

                          <p className="mt-1 font-space-grotesk text-sm text-white/70">
                            {activePost.readTime}
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Read button */}
                    <motion.a
                      href="#article"
                      whileHover={{
                        x: 5,
                      }}
                      className="group mt-7 flex items-center justify-between"
                    >
                      <span className="font-inter text-sm font-medium text-white">
                        Read Full Story
                      </span>

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/15
                          transition-all
                          duration-300
                          group-hover:border-cyan
                          group-hover:bg-cyan
                          group-hover:text-space
                        "
                      >
                        <ArrowUpRight size={17} />
                      </span>
                    </motion.a>

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

              {posts.map((post, index) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to article ${index + 1}`}
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

            {/* Arrows */}
            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous article"
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
                onClick={nextSlide}
                aria-label="Next article"
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
            MOBILE VIEW ALL
        ==================================================== */}

        <a
          href="#blog"
          className="
            mt-8
            flex
            w-fit
            items-center
            gap-2
            font-inter
            text-sm
            font-medium
            text-white
            sm:hidden
          "
        >
          View All Stories

          <ArrowUpRight
            size={15}
            className="text-cyan"
          />
        </a>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

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
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="font-inter text-[10px] uppercase tracking-[0.22em] text-white/30">
                COSMOVENTURES JOURNAL
              </span>
            </div>

            <p className="font-space-grotesk text-lg text-white/50">
              Curiosity is the beginning of every journey.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBlogSection;