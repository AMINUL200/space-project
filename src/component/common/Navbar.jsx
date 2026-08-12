import React, { useEffect, useState } from "react";
import { Menu, X, ArrowDownRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      id: "home",
      label: "Home",
      href: "#home",
    },
    {
      id: "about",
      label: "About Us",
      href: "#about",
    },
    {
      id: "missions",
      label: "Space Missions",
      href: "#missions",
    },
    {
      id: "technology",
      label: "Technology",
      href: "#technology",
    },
    {
      id: "future",
      label: "Future Exploration",
      href: "#future",
    },
    {
      id: "blog",
      label: "Blog",
      href: "#blog",
    },
    {
      id: "contact",
      label: "Contact Us",
      href: "#contact",
    },
  ];

  const handleLinkClick = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header
        className={`
          fixed left-0 top-0 z-[100] w-full
          transition-all duration-500
          ${
            scrolled
              ? "bg-space/70 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[76px]
            w-full
            max-w-[1440px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-10
            xl:px-12
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="
              relative
              z-10
              shrink-0
              font-space-grotesk
              text-base
              font-medium
              tracking-[-0.02em]
              text-white/85
              transition-colors
              duration-300
              hover:text-white
              sm:text-lg
            "
          >
            CosmoVentures
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="
                  relative
                  font-inter
                  text-[12px]
                  font-medium
                  text-white/50
                  transition-all
                  duration-300
                  hover:text-white
                  xl:text-[13px]
                "
              >
                {link.label}

                {/* Hover underline */}
                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-[1px]
                    w-0
                    -translate-x-1/2
                    bg-cyan
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* =================================================
              RIGHT CTA
          ================================================== */}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="
              group
              hidden
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-white
              px-4
              py-2
              font-inter
              text-[11px]
              font-medium
              text-space-navy
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:bg-white/90
              sm:px-5
              sm:py-2.5
              sm:text-xs
              lg:flex
            "
          >
            <span>Get Involved Now</span>

            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-space-navy
                text-white
                transition-transform
                duration-300
                group-hover:rotate-[-45deg]
              "
            >
              <ArrowDownRight
                size={11}
                strokeWidth={2.5}
              />
            </span>
          </a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/5
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white/10
              lg:hidden
            "
            aria-label="Toggle navigation"
          >
            {mobileMenu ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            lg:hidden
            ${
              mobileMenu
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              mx-4
              mb-4
              rounded-2xl
              border
              border-white/10
              bg-space-navy/90
              p-4
              shadow-2xl
              backdrop-blur-xl
            "
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    border-b
                    border-white/5
                    px-3
                    py-3.5
                    font-inter
                    text-sm
                    text-white/65
                    transition-colors
                    duration-300
                    last:border-none
                    hover:text-white
                  "
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2
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
                <span>Get Involved Now</span>

                <ArrowDownRight
                  size={15}
                  strokeWidth={2.5}
                />
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;