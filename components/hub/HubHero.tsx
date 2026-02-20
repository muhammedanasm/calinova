"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

const HubHero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Background Image Zoom Effect
      gsap.from(".hub-bg-img", {
        scale: 1.2,
        duration: 2,
        ease: "power2.out",
      });

      // Text Staggered Animation
      tl.from(".hub-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hub-title",
          { opacity: 0, y: 40, duration: 1, ease: "power4.out" },
          "-=0.4",
        )
        .from(
          ".hub-desc",
          { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .from(
          ".hub-btn",
          { opacity: 0, scale: 0.9, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Background Image Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hub.png" // നിന്റെ ഇമേജ് ഇവിടെ നൽകുക
          alt="AI Hub Core"
          fill
          className="hub-bg-img object-cover opacity-60"
          priority
        />
        {/* Dark Gradient Overlays to match Figma */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 2. Content Center Area */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Label: AI HUB */}
        <div className="hub-label mb-5">
          <span
            className="font-clash text-xs md:text-base font-bold tracking-[6px] uppercase"
            style={{
              background:
                "radial-gradient(102.39% 165.83% at 3.72% 12.76%, #33E2C5 0%, #0681BF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            AI HUB
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="hub-title text-white font-clash text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.05] tracking-[2px] max-w-6xl mx-auto mb-5">
          The Nucleus of Artificial <br /> Intelligence
        </h1>

        {/* Sub-description */}
        <p className="hub-desc text-white/70 text-sm md:text-sm font-satoshi max-w-xl mx-auto mb-12 leading-relaxed">
          The Calinova AI Hub is where algorithms{" "}
          <br className="hidden md:block" /> become applications.
        </p>

        {/* Button with Shine Effect */}
        <div className="hub-btn flex justify-center">
          <Link href="/contact">
            <button className="group relative overflow-hidden flex items-center gap-3 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] text-white px-5 py-4 rounded-full font-bold uppercase text-[12px] tracking-[2px] transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(51,226,197,0.3)] cursor-pointer">
              {/* Shine Sweep Effect */}
              <span className="absolute inset-0 flex justify-center">
                <span className="relative h-full w-12 bg-white/40 blur-[20px] -skew-x-[45deg] -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
              </span>

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                Let's Talk
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black/20 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} strokeWidth={3} />
                </div>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator (Optional, but looks premium) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

export default HubHero;
