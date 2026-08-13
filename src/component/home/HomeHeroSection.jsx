import React, { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";

const HomeHeroSection = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: headingRef, delay: 200 },
      { ref: descriptionRef, delay: 400 },
      { ref: buttonsRef, delay: 600 },
    ];

    const timers = elements.map(({ ref, delay }) => {
      return setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";
        }
      }, delay);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-space" id="home">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 z-0 bg-space" />

      {/* =====================================================
          PLANET VIDEO
      ====================================================== */}
      <div className="absolute inset-0 z-10 h-full w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/planet.mp4" type="video/mp4" />
        </video>
      </div>

      {/* =====================================================
          VIDEO OVERLAY
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-black/20" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="relative z-30 min-h-screen w-full">

        <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-5 pb-8 pt-8 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12 lg:pt-10 xl:px-16">

       

          {/* =================================================
              MAIN HERO AREA
          ================================================= */}
          <div className="relative flex flex-1">

            {/* =================================================
                LEFT HEADING
            ================================================= */}
            <div
              ref={headingRef}
              className="absolute left-0 top-16 max-w-[680px] opacity-0 transition-all duration-700 ease-out sm:top-20 lg:top-20 xl:top-24"
              style={{
                transform: "translateY(20px)",
              }}
            >
              <h1 className="font-space-grotesk text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px]">

                <span className="text-white">
                  Explore the Final Frontier
                </span>

                <br />

                <span className="text-white/70">
                  with Our Company
                </span>

                <br />

                <span className="text-white/70">
                  Expedition
                </span>

              </h1>
            </div>

            {/* =================================================
                RIGHT DESCRIPTION
            ================================================= */}
            <div
              ref={descriptionRef}
              className="absolute right-0 top-24 hidden w-[300px] opacity-0 transition-all duration-700 ease-out lg:block xl:top-28"
              style={{
                transform: "translateY(20px)",
              }}
            >
              <p className="text-right font-inter text-base leading-[1.5] text-white/70 xl:text-lg">
                Join us as we journey through
                <br />
                space, from Mars missions to
                <br />
                intergalactic discoveries,
                <br />
                paving the way for future
                <br />
                exploration.
              </p>
            </div>

            {/* =================================================
                MOBILE DESCRIPTION
            ================================================= */}
            <div className="absolute left-0 top-[330px] block max-w-[500px] lg:hidden">
              <p className="font-inter text-sm leading-6 text-white/70 sm:text-base">
                Join us as we journey through space, from Mars
                missions to intergalactic discoveries, paving
                the way for future exploration.
              </p>
            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}
            <div
              ref={buttonsRef}
              className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 opacity-0 transition-all duration-700 ease-out sm:bottom-10 sm:flex-row sm:gap-4 lg:bottom-12"
              style={{
                transform: "translate(-50%, 20px)",
              }}
            >

              

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[45%] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    </section>
  );
};

export default HomeHeroSection;