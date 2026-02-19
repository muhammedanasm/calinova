"use client";
import React, { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const ForgeSection = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".forge-title", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          ".forge-desc",
          {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=1",
        )
        .from(
          ".forge-video-container",
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
          },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#010206] py-32 pt-0 overflow-hidden"
    >
      {/* --- PREMIUM BACKGROUND GLOWS (Left & Right) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Left Glow */}
        <div className="absolute top-1/2 -left-48 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/15 rounded-full blur-[160px] opacity-90" />

        {/* Right Glow */}
        <div className="absolute -bottom-100 -right-48 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[160px]" />
      </div>
      <div className="container mx-auto px-6 md:px-20 relative z-10">
        {/* HEADER AREA: Title on Left, Description on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-16 md:mb-24">
          <div className="forge-title">
            <h2 className="text-white font-clash text-5xl md:text-3xl font-semibold tracking-[1px] leading-tight uppercase">
              The Forge of the Future
            </h2>
          </div>

          <div className="forge-desc md:text-right">
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-satoshi max-w-sm md:ml-auto text-left text-white">
              Technology creates the space; you create the purpose. From AI labs
              to open commons, this is where people and technology meet to solve
              the world's hardest problems.
            </p>
          </div>
        </div>

        {/* PREMIUM VIDEO AREA: Pill Shaped with Edge Fades */}
        <div className="forge-video-container relative w-full aspect-[21/9] md:aspect-[2.4/1] rounded-[100px] md:rounded-[200px] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Edge Shadows (The Premium Glow/Fade from Figma) */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#010206] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#010206] to-transparent z-10 pointer-events-none" />

          {/* Subtle Inner Border Glow */}
          <div className="absolute inset-0 rounded-[100px] md:rounded-[200px] border border-white/10 z-20 pointer-events-none shadow-[inset_0_0_60px_rgba(51,226,197,0.05)]" />

          {/* Actual Video */}
          <video
            src="/videos/forge.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ForgeSection;
