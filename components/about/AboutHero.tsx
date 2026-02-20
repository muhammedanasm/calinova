"use client";
import React, { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".about-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
      })
        .from(
          ".about-sub",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ".about-btn",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* 1. Background Video Section */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/videos/about-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark subtle overlay to make text pop */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col items-center justify-center text-center">
        <h1 className="about-title font-clash text-5xl md:text-7xl lg:text-[85px] font-bold leading-[1] tracking-tight text-white max-w-6xl uppercase">
          Calinova is more than <br /> architecture.
        </h1>

        <div className="mt-8 space-y-8">
          <p className="about-sub text-white/80 text-lg md:text-xl font-satoshi max-w-2xl mx-auto leading-relaxed">
            It is the foundation where intelligence is built,{" "}
            <br className="hidden md:block" />
            scaled, and sustained.
          </p>

          <div className="about-btn flex justify-center">
            <button className="group relative overflow-hidden flex items-center gap-3 bg-[#0083C3] text-white px-10 py-4 rounded-full font-bold uppercase text-[12px] tracking-[2px] transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(0,131,195,0.3)] cursor-pointer">
              {/* Shine Effect */}
              <span className="absolute inset-0 flex justify-center">
                <span className="relative h-full w-12 bg-white/30 blur-[20px] -skew-x-[45deg] -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-[1000ms] ease-in-out" />
              </span>

              <span className="relative z-10 flex items-center gap-3">
                Explore the Ecosystem
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. The Specific Blue Gradient at the Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[450px] pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 131, 195, 0) 0%, #0083C3 85%)",
        }}
      />
    </section>
  );
};

export default AboutHero;
