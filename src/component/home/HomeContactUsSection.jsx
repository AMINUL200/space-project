import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Send,
  CheckCircle2,
  Sparkles,
  Radio,
  Building2,
  Users,
  Globe,
} from "lucide-react";

const HomeContactUsSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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
            Leading the way in metallurgical innovation, space technology,
            and scientific excellence across India and the United States.
          </p>
        </motion.div>

        {/* ===================================================
            CONTACT GRID
        ==================================================== */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr]">
          {/* =================================================
              LEFT — CONTACT INFORMATION
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

            <h3 className="relative z-10 mt-10 max-w-[400px] font-space-grotesk text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-3xl">
              Get in touch
              <br />
              <span className="text-white/40">with our team</span>
            </h3>

            <p className="relative z-10 mt-6 max-w-[380px] font-inter text-sm leading-6 text-text-muted">
              Have a project in mind? Our team of experts is ready to hear
              from you and explore how we can collaborate.
            </p>

            {/* Contact details */}
            <div className="relative z-10 mt-10 space-y-5 border-t border-white/10 pt-7">
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
                    rabinderchander@gmail.com
                  </p>
                </div>
              </a>

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

              {/* Location - Main Office */}
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                  <Building2 size={16} />
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

              {/* Location - India Office */}
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50">
                  <Globe size={16} />
                </span>
                <div>
                  <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                    India Office
                  </p>
                  <p className="mt-1 font-inter text-sm text-white/70">
                    New Delhi
                  </p>
                </div>
              </div>
            </div>

            {/* Key Personnel */}
            <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Users size={14} className="text-cyan/60" />
                <span className="font-inter text-[9px] uppercase tracking-[0.15em] text-white/25">
                  Key Personnel
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-inter text-xs font-medium text-white">
                    Mr. Nicholas Horsburgh
                  </p>
                  <p className="font-inter text-[10px] text-white/40">
                    President & CEO
                  </p>
                </div>

                <div>
                  <p className="font-inter text-xs font-medium text-white">
                    Mr. R.N. CHANDRA
                  </p>
                  <p className="font-inter text-[10px] text-white/40">
                    India Head
                  </p>
                </div>

                <div>
                  <p className="font-inter text-[10px] text-cyan/60">
                    Metallurgist & Scientist
                  </p>
                  <p className="font-inter text-[10px] text-white/30">
                    BARC · ISRO · DRDO
                  </p>
                </div>
              </div>
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
              RIGHT — CONTACT FORM
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:p-10"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form header */}
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-cyan">
                      Send Inquiry
                    </p>
                    <h3 className="mt-2 font-space-grotesk text-2xl font-medium text-white sm:text-3xl">
                      Tell us about your project.
                    </h3>
                  </div>
                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/30 sm:flex">
                    <Rocket size={17} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-inter text-[10px] uppercase tracking-[0.16em] text-white/35">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-inter text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-inter text-[10px] uppercase tracking-[0.16em] text-white/35">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-inter text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan/20"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 block font-inter text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-inter text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan/20"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="mb-2 block font-inter text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-inter text-sm text-white outline-none transition-all duration-300 focus:border-cyan/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan/20"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-space">
                      Select a subject
                    </option>
                    <option value="metallurgy" className="bg-space">
                      Metallurgy & Materials
                    </option>
                    <option value="space-technology" className="bg-space">
                      Space Technology
                    </option>
                    <option value="research" className="bg-space">
                      Research & Development
                    </option>
                    <option value="collaboration" className="bg-space">
                      Collaboration
                    </option>
                    <option value="general" className="bg-space">
                      General Inquiry
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block font-inter text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-inter text-sm leading-6 text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan/20"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[300px] font-inter text-[10px] leading-5 text-white/25">
                    Your inquiry will be securely received by our team.
                  </p>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-inter text-sm font-medium text-space-navy shadow-xl"
                  >
                    Send Message
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-space-navy text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <Send size={11} strokeWidth={2.5} />
                    </span>
                  </motion.button>
                </div>
              </form>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[550px] flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 180, damping: 12 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan"
                >
                  <CheckCircle2 size={38} strokeWidth={1.5} />
                </motion.div>

                <p className="mt-8 font-inter text-[10px] uppercase tracking-[0.25em] text-cyan">
                  Message Sent
                </p>

                <h3 className="mt-3 font-space-grotesk text-3xl font-medium text-white sm:text-4xl">
                  Thank you for reaching out.
                </h3>

                <p className="mt-4 max-w-[450px] font-inter text-sm leading-6 text-text-muted">
                  Our team will review your inquiry and get back to you as
                  soon as possible.
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                  <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Connection Established
                  </span>
                </div>
              </motion.div>
            )}
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