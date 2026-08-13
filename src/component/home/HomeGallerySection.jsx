import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Sparkles, Radio } from "lucide-react";

const galleryImages = [
  {
    title: "Rocket Launch",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1200&q=80",
    description: "Powerful rocket launch illuminating the night sky",
    tag: "LIFTOFF",
  },
  {
    title: "Mars Mission",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    description: "Exploring the red planet's mysterious surface",
    tag: "DEEP SPACE",
  },
  {
    title: "Astronaut",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80",
    description: "Human exploration in the vastness of space",
    tag: "EVA",
  },
  {
    title: "Space Station",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80",
    description: "International Space Station orbiting Earth",
    tag: "ORBIT",
  },
  {
    title: "Deep Space",
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1200&q=80",
    description: "The infinite beauty of deep space exploration",
    tag: "FRONTIER",
  },
];

const SLIDE_DURATION = 5000;

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HomeGallerySection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const rafRef = useRef(null);
  const startRef = useRef(null);
  const elapsedRef = useRef(0);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setActive(index);
  }, []);

  const nextSlide = useCallback(() => {
    goTo(active === galleryImages.length - 1 ? 0 : active + 1, 1);
  }, [active, goTo]);

  const prevSlide = useCallback(() => {
    goTo(active === 0 ? galleryImages.length - 1 : active - 1, -1);
  }, [active, goTo]);

  useEffect(() => {
    elapsedRef.current = 0;
    startRef.current = null;
    setProgress(0);

    const tick = (now) => {
      if (startRef.current === null) startRef.current = now - elapsedRef.current;
      elapsedRef.current = now - startRef.current;
      const pct = Math.min(elapsedRef.current / SLIDE_DURATION, 1);
      setProgress(pct);

      if (pct >= 1) {
        nextSlide();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    if (!isPaused) {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isPaused]);

  const handleManualNav = (fn) => {
    elapsedRef.current = 0;
    startRef.current = null;
    fn();
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-space py-8 sm:py-14 lg:py-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-100px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan blur-[170px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-150px] right-[-100px] h-[550px] w-[550px] rounded-full bg-purple blur-[180px]"
        />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan" />
            <span className="font-inter text-[11px] font-medium uppercase tracking-[0.28em] text-cyan">
              Space Gallery
            </span>
          </div>
          <h2 className="font-space-grotesk text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Mission
            <br />
            <span className="text-white/40">Highlights</span>
          </h2>
          <p className="mt-5 max-w-2xl font-inter text-base leading-7 text-text-muted sm:text-lg">
            Explore rocket launches, deep space exploration, astronauts and
            future missions that define our journey.
          </p>
        </motion.div>

        {/* Main Slider */}
        <motion.div
          initial={{ opacity: 0, y: 65 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Story-style segmented progress bar */}
          <div className="absolute left-6 right-6 top-6 z-20 flex gap-1.5 sm:left-8 sm:right-8 sm:top-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNav(() => goTo(index, index > active ? 1 : -1))}
                aria-label={`Go to slide ${index + 1}`}
                className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15"
              >
                <div
                  className="h-full rounded-full bg-cyan"
                  style={{
                    width:
                      index < active ? "100%" : index === active ? `${progress * 100}%` : "0%",
                    transition: index === active ? "none" : "width 0.3s ease",
                  }}
                />
              </button>
            ))}
          </div>

          <div className="relative h-[550px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] sm:h-[600px] lg:h-[650px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={galleryImages[active].image}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {/* Ken Burns slow zoom while active */}
                <motion.img
                  src={galleryImages[active].image}
                  alt={galleryImages[active].title}
                  initial={{ scale: 1 }}
                  animate={{ scale: isPaused ? 1.03 : 1.08 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle overlay kept just for badge/counter legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-space/35 via-transparent to-space/25" />

            {/* Status Badge */}
            <div className="absolute left-6 top-16 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md sm:left-8 sm:top-[4.5rem]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/80">
                {isPaused ? "Paused" : "Mission Gallery"}
              </span>
            </div>

            {/* Slide Counter */}
            <div className="absolute right-6 top-16 z-10 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md sm:right-8 sm:top-[4.5rem]">
              <span className="font-inter text-[10px] text-white/60">
                {String(active + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
              </span>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={() => handleManualNav(prevSlide)}
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan sm:left-6"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => handleManualNav(nextSlide)}
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan sm:right-6"
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Thumbnails — filmstrip */}
          <div className="mt-6 grid grid-cols-5 gap-3 sm:gap-4">
            {galleryImages.map((item, index) => (
              <button
                key={index}
                onClick={() => handleManualNav(() => goTo(index, index > active ? 1 : -1))}
                className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  active === index
                    ? "border-cyan shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-20 w-full object-cover transition-all duration-500 sm:h-24 ${
                    active === index ? "scale-105" : "grayscale-[40%] group-hover:scale-105 group-hover:grayscale-0"
                  }`}
                />
                {active === index && <div className="absolute inset-0 bg-cyan/10" />}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bottom Status */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <Radio size={15} className="text-cyan" />
            <span className="font-inter text-[10px] uppercase tracking-[0.22em] text-white/30">
              Mission Gallery · Active
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles size={14} className="text-cyan/60" />
            <span className="font-inter text-[10px] uppercase tracking-[0.18em] text-white/30">
              {galleryImages.length} Images Available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGallerySection;