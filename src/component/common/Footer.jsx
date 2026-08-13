import React from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Rocket,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    explore: {
      title: "Explore",
      links: [
        { name: "About", url: "#about" },
        { name: "Space Missions", url: "#missions" },
        { name: "Technology", url: "#technology" },
        { name: "Future Exploration", url: "#future" },
      ],
    },

    discover: {
      title: "Discover",
      links: [
        { name: "Journal", url: "#blog" },
        { name: "Contact Us", url: "#contact" },
        { name: "Our Journey", url: "#about" },
        { name: "Mission Control", url: "#contact" },
      ],
    },

    connect: {
      title: "Connect",
      links: [
        {
          name: "hello@cosmoventures.com",
          url: "mailto:hello@cosmoventures.com",
        },
        {
          name: "+1 (000) 000-0000",
          url: "tel:+10000000000",
        },
        {
          name: "Mission Control · Earth",
          url: "#contact",
        },
      ],
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-space text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Cyan glow */}
        <div
          className="
            absolute
            left-[10%]
            top-[-200px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan/10
            blur-[160px]
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            right-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple/10
            blur-[170px]
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
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-8 pt-20 sm:px-8 sm:pt-24 lg:px-12 xl:px-16">

        {/* ===================================================
            TOP BRAND AREA
        ==================================================== */}

     

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">

            <p className="font-inter text-[11px] text-white/25">
             
              © 2026 archieswilliam. All rights reserved.
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />

            <a
              href="#"
              className="font-inter text-[11px] text-white/25 transition-colors hover:text-white/60"
            >
              Privacy
            </a>

            <a
              href="#"
              className="font-inter text-[11px] text-white/25 transition-colors hover:text-white/60"
            >
              Terms
            </a>

          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              font-inter
              text-[11px]
              text-white/40
              transition-colors
              hover:text-white
            "
          >
            Back to the beginning

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                transition-all
                duration-300
                group-hover:border-cyan
                group-hover:bg-cyan
                group-hover:text-space
              "
            >
              <ArrowUp size={14} />
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;