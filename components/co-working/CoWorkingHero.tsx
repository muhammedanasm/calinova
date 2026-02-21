"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

const CoWorkingHero = () => {
  const containerRef = useRef(null);

  // നീ നൽകിയ ആ കൃത്യമായ Radial Gradient String
  const radialGradient =
    "radial-gradient(102.39% 165.83% at 3.72% 12.76%, #33E2C5 0%, #0681BF 100%)";

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Background subtle zoom
      gsap.from(".cowork-bg", {
        scale: 1.1,
        duration: 2,
        ease: "power2.out",
      });

      // Text Reveal
      tl.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cowork-hero.webp"
          alt="Co-working Space"
          fill
          className="cowork-bg object-cover opacity-60"
          priority
        />
        {/* Dark overlay to match screenshot */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        {/* Label with Radial Gradient */}
        <div className="reveal-item mb-6">
          <span
            className="font-clash text-xs md:text-sm font-bold tracking-[4px] uppercase"
            style={{
              background: radialGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            CO-WORKING INTELLIGENCE SPACES
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="reveal-item text-white font-clash text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1] tracking-tight mb-8">
          Where Visionaries Work
        </h1>

        {/* Description */}
        <p className="reveal-item text-white/70 text-base md:text-lg font-satoshi max-w-2xl mx-auto mb-12 leading-relaxed">
          The Calinova's Co-Working Spaces are not desks. They are ecosystems.{" "}
          <br className="hidden md:block" />
          AI Hub is where algorithms become applications.
        </p>

        {/* Button with Radial Gradient */}
        <div className="reveal-item flex justify-center">
          <button
            className="group relative overflow-hidden flex items-center gap-3 text-white px-5 py-4 rounded-full font-bold uppercase text-[12px] tracking-[2px] transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(0,131,195,0.3)] cursor-pointer"
            style={{ background: radialGradient }}
          >
            {/* Shine Sweep Effect */}
            <span className="absolute inset-0 flex justify-center">
              <span className="relative h-full w-12 bg-white/30 blur-[20px] -skew-x-[45deg] -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
            </span>

            <span className="relative z-10 flex items-center gap-3">
              Let's Talk
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black/20 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} strokeWidth={3} />
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-[1px] h-12 bg-white animate-pulse" />
      </div>
    </section>
  );
};

export default CoWorkingHero;
