import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Radio,
  Building2,
  Users,
  Globe,
  Briefcase,
  User,
  Building,
  Link,
} from "lucide-react";

const HomeContactUsSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-space py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[20%] h-[550px] w-[550px] rounded-full bg-cyan blur-[170px]"
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-100px] right-[5%] h-[600px] w-[600px] rounded-full bg-purple blur-[180px]"
        />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Stars */}
        <div className="absolute left-[12%] top-[15%] h-1 w-1 rounded-full bg-white/50" />
        <div className="absolute left-[80%] top-[20%] h-1.5 w-1.5 rounded-full bg-cyan/60" />
        <div className="absolute left-[72%] top-[65%] h-1 w-1 rounded-full bg-white/40" />
        <div className="absolute left-[20%] top-[75%] h-1 w-1 rounded-full bg-purple/60" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ===================================================
            HEADER
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[900px]"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan" />
            <span className="font-inter text-[11px] font-medium uppercase tracking-[0.28em] text-cyan">
              Contact Us
            </span>
          </div>

          <h2 className="font-space-grotesk text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[70px]">
            Archies William
            <br />
            <span className="text-white/40">Pvt Ltd.</span>
          </h2>

          <p className="mt-7 max-w-[650px] font-inter text-base leading-7 text-text-muted sm:text-lg">
            Leading the way in metallurgical innovation, space technology, and
            scientific excellence across India and the United States.
          </p>
        </motion.div>

        {/* ===================================================
            CONTACT GRID
        ==================================================== */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2">
          {/* =================================================
              LEFT — MAIN OFFICE
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:p-10"
          >
            {/* Decorative orbital circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute -right-[150px] -top-[150px] h-[350px] w-[350px] rounded-full border border-cyan/10"
            >
              <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            </motion.div>

            {/* Status */}
            <div className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-cyan">
                Mission Control Online
              </span>
            </div>

            {/* Company Name Big Text */}
            <div className="relative z-10 mt-6">
              <h3 className="font-space-grotesk text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                ARCHIES
                <br />
                <span className="text-cyan">WILLIAM</span>
              </h3>
              <p className="mt-2 font-inter text-xs uppercase tracking-[0.2em] text-white/30">
                Pvt Ltd.
              </p>
            </div>

            {/* Main Office Details */}
            <div className="relative z-10 mt-8 space-y-5 border-t border-white/10 pt-8">
            <h4 className="font-space-grotesk text-lg font-semibold text-white">
              Main Office & Website Details
            </h4>
              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                    Main Office
                  </p>
                  <p className="mt-1 font-inter text-sm text-white/70 leading-tight">
                    425 3rd Street SW
                    <br />
                    Washington DC 20024
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+14107302656"
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/10 group-hover:text-cyan">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                    Phone
                  </p>
                  <p className="mt-1 font-inter text-sm text-white/70 transition-colors group-hover:text-white">
                    (410) 730-2656
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@archieswilliam.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/10 group-hover:text-cyan">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                    Email
                  </p>
                  <p className="mt-1 font-inter text-sm text-white/70 transition-colors group-hover:text-white">
                    info@archieswilliam.com
                  </p>
                </div>
              </a>

              {/* Website */}
              <a
                href="https://archieswilliam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/10 group-hover:text-cyan">
                  <Link size={16} />
                </span>
                <div>
                  <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                    Website
                  </p>
                  <p className="mt-1 font-inter text-sm text-white/70 transition-colors group-hover:text-cyan">
                    archieswilliam.com
                  </p>
                </div>
              </a>
            </div>

            {/* Bottom system data */}
            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <Radio size={14} className="text-cyan" />
                <span className="font-inter text-[9px] uppercase tracking-[0.16em] text-white/30">
                  Transmission Ready
                </span>
              </div>
              <span className="font-space-grotesk text-[10px] text-white/20">
                AWP-2024
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — BRANCH OFFICES & PERSONNEL
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Branch Offices */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={18} className="text-cyan" />
                <h3 className="font-space-grotesk text-2xl font-medium text-white">
                  Branch Offices
                </h3>
              </div>

              <div className="space-y-6">
              

                {/* India Branch */}
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                    <Building size={16} />
                  </span>
                  <div>
                    <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-cyan">
                      India Branch Office
                    </p>
                    <p className="mt-1 font-inter text-sm text-white/70 leading-tight">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Personnel */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Users size={18} className="text-cyan" />
                <h3 className="font-space-grotesk text-2xl font-medium text-white">
                  Key Personnel
                </h3>
              </div>

              <div className="space-y-5">
                {/* 1. Nicholas Horsburgh */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                    <User size={16} />
                  </span>
                  <div>
                    <p className="font-inter text-sm font-medium text-white">
                      Nicholas Horsburgh
                    </p>
                    <p className="font-inter text-xs text-cyan/70">
                      President & CEO
                    </p>
                    <a
                      href="tel:+14107302656"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan transition-colors"
                    >
                      <Phone size={11} className="text-cyan/40" />
                      (410) 730-2656
                    </a>
                  </div>
                </div>

                {/* 2. R. N. Chandra */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                    <User size={16} />
                  </span>
                  <div>
                    <p className="font-inter text-sm font-medium text-white">
                      R. N. Chandra
                    </p>
                    <p className="font-inter text-xs text-cyan/70">
                      India Head
                    </p>
                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:+919873999392"
                        className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan transition-colors"
                      >
                        <Phone size={11} className="text-cyan/40" />
                        +91 9873999392
                      </a>
                      <br />
                      <a
                        href="tel:+917550755553"
                        className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan transition-colors"
                      >
                        <Phone size={11} className="text-cyan/40" />
                        +91 7550755553
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Dr. Arjun Mehta */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                    <User size={16} />
                  </span>
                  <div>
                    <p className="font-inter text-sm font-medium text-white">
                      Dr. Arjun Mehta
                    </p>
                    <p className="font-inter text-xs text-cyan/70">
                      Chief Scientific Officer
                    </p>
                    <a
                      href="tel:+917550755553"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan transition-colors"
                    >
                      <Phone size={11} className="text-cyan/40" />
                      +91 7550755553
                    </a>
                  </div>
                </div>

                {/* 4. Ananya Sharma */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                    <User size={16} />
                  </span>
                  <div>
                    <p className="font-inter text-sm font-medium text-white">
                      Ananya Sharma
                    </p>
                    <p className="font-inter text-xs text-cyan/70">
                      Director, Space Systems
                    </p>
                    <a
                      href="tel:+14107302656"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan transition-colors"
                    >
                      <Phone size={11} className="text-cyan/40" />
                      (410) 730-2656
                    </a>
                  </div>
                </div>

                {/* 5. Daniel Williams */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                    <User size={16} />
                  </span>
                  <div>
                    <p className="font-inter text-sm font-medium text-white">
                      Daniel Williams
                    </p>
                    <p className="font-inter text-xs text-cyan/70">
                      Director, Engineering
                    </p>
                    <a
                      href="tel:+14107302656"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan transition-colors"
                    >
                      <Phone size={11} className="text-cyan/40" />
                      (410) 730-2656
                    </a>
                  </div>
                </div>

                {/* 6. Dr. Priya Nair */}
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                    <User size={16} />
                  </span>
                  <div>
                    <p className="font-inter text-sm font-medium text-white">
                      Dr. Priya Nair
                    </p>
                    <p className="font-inter text-xs text-cyan/70">
                      Head of Earth Observation
                    </p>
                    <a
                      href="tel:+917550755553"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-cyan transition-colors"
                    >
                      <Phone size={11} className="text-cyan/40" />
                      +91 7550755553
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            FINAL CTA
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/10 pt-8 lg:mt-24"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-cyan" />
              <span className="font-inter text-[10px] uppercase tracking-[0.22em] text-white/30">
                ARCHIES WILLIAM PVT LTD · EST. 2024
              </span>
            </div>

            <a
              href="#home"
              className="group flex w-fit items-center gap-3 font-inter text-sm text-white/50 transition-colors hover:text-white"
            >
              Return to the beginning
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-cyan group-hover:bg-cyan group-hover:text-space">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContactUsSection;