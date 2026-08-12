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

        <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_1fr]">

          {/* Brand */}
          <div>

            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >

              {/* Logo */}
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan/30
                  bg-cyan/5
                  text-cyan
                  transition-all
                  duration-300
                  group-hover:border-cyan
                  group-hover:bg-cyan/10
                "
              >
                <Rocket
                  size={19}
                  strokeWidth={1.5}
                />
              </span>

              <span className="font-space-grotesk text-xl font-semibold tracking-[-0.03em]">
                COSMO
                <span className="text-cyan">
                  VENTURES
                </span>
              </span>

            </a>

            <p className="mt-7 max-w-[520px] font-space-grotesk text-3xl font-medium leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl">
              Exploring what's
              <br />

              <span className="text-white/35">
                beyond the horizon.
              </span>
            </p>

            <p className="mt-6 max-w-[500px] font-inter text-sm leading-6 text-white/40">
              We build technologies, missions and ideas that move humanity
              closer to the next frontier of space exploration.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-cyan/40
                  hover:bg-cyan/10
                  hover:text-cyan
                "
              >
                <Instagram size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-cyan/40
                  hover:bg-cyan/10
                  hover:text-cyan
                "
              >
                <Linkedin size={15} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-cyan/40
                  hover:bg-cyan/10
                  hover:text-cyan
                "
              >
                <Twitter size={15} />
              </a>

            </div>
          </div>

          {/* =================================================
              LINKS
          ================================================== */}

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>

                <h3 className="font-inter text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
                  {section.title}
                </h3>

                <ul className="mt-5 space-y-3">

                  {section.links.map((link, index) => (
                    <li key={index}>

                      <a
                        href={link.url}
                        className="
                          group
                          inline-flex
                          items-center
                          gap-1.5
                          font-inter
                          text-sm
                          text-white/50
                          transition-colors
                          duration-300
                          hover:text-white
                        "
                      >
                        {link.name}

                        <ArrowUpRight
                          size={12}
                          className="
                            opacity-0
                            -translate-x-1
                            transition-all
                            duration-300
                            group-hover:translate-x-0
                            group-hover:opacity-100
                            group-hover:text-cyan
                          "
                        />
                      </a>

                    </li>
                  ))}

                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* ===================================================
            CONTACT STRIP
        ==================================================== */}

        <div className="border-b border-white/10 py-7">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Email */}
            <a
              href="mailto:hello@cosmoventures.com"
              className="group flex items-center gap-3"
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
                  bg-white/[0.02]
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

              <div>
                <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/20">
                  Email
                </p>

                <p className="mt-0.5 font-inter text-xs text-white/50 group-hover:text-white">
                  hello@cosmoventures.com
                </p>
              </div>

            </a>

            {/* Location */}
            <div className="flex items-center gap-3">

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
                  bg-white/[0.02]
                  text-white/40
                "
              >
                <MapPin size={14} />
              </span>

              <div>
                <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/20">
                  Headquarters
                </p>

                <p className="mt-0.5 font-inter text-xs text-white/50">
                  Earth · Mission Control
                </p>
              </div>

            </div>

            {/* Status */}
            <div className="flex items-center gap-3">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>

              <div>
                <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/20">
                  Mission Control
                </p>

                <p className="mt-0.5 font-inter text-xs text-cyan">
                  Online · Ready
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">

            <p className="font-inter text-[11px] text-white/25">
              © {new Date().getFullYear()} CosmoVentures.
              All rights reserved.
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