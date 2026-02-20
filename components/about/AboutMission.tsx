"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

const AboutMission = () => {
  const containerRef = useRef(null);

  const radialGradient =
    "radial-gradient(102.39% 165.83% at 3.72% 12.76%, #33E2C5 0%, #0681BF 100%)";

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      tl.from(".mission-top", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".mission-list-item",
          { x: 30, opacity: 0, stagger: 0.2, duration: 0.8 },
          "-=0.5",
        )
        .from(".mission-bottom", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
        .from(
          ".feature-card-item",
          { scale: 0.9, opacity: 0, stagger: 0.2, duration: 0.8 },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#010206] py-24 md:py-40 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute bottom-0 -left-20 w-[600px] h-[700px] bg-[#33E2C5]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-[#0681BF]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        {/* TOP SECTION: Text + List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="mission-top space-y-10">
            <h2
              className="font-clash text-3xl md:text-[34px] font-semibold leading-[1.3] tracking-tight"
              style={{
                background: radialGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              From labs to living ecosystems, every space at Calinova is
              engineered for discovery, progress, and purpose.
            </h2>

            <button className="group relative cursor-pointer overflow-hidden flex items-center gap-3 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] px-6 py-4 rounded-full font-semibold uppercase text-[11px] tracking-[2px] hover:scale-105 transition-all duration-500 shadow-[0_0_15px_rgba(51,226,197,0.2)] hover:shadow-[0_0_30px_rgba(51,226,197,0.4)] text-white">
              {/* 1. Shine Effect Layer (Exact same as first button) */}
              <span className="absolute inset-0 flex justify-center">
                <span className="relative h-full w-12 bg-white/40 blur-[20px] -skew-x-[45deg] -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-[1000ms] ease-in-out" />
              </span>

              {/* 2. Button Content */}
              <span className="relative z-10 flex items-center gap-3 font-black">
                Lets connect
                {/* Figma Arrow Style with circle - matching the first button */}
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black/10 group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={14} strokeWidth={3} />
                </div>
              </span>
            </button>
          </div>

          <div className="space-y-0">
            {[
              "Where design meets data.",
              "Where the next generation of AI innovation begins.",
              "Where research meets real-world impact.",
            ].map((text, i) => (
              <div
                key={i}
                className="mission-list-item flex items-start gap-6 py-8 border-b border-white/10 last:border-0"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full mt-2 shrink-0"
                  style={{ background: radialGradient }}
                />
                <p className="text-white text-2xl md:text-3xl font-clash font-medium tracking-tight">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: Features Grid */}
        <div className="mt-40 md:mt-30">
          <div className="mission-bottom mb-20">
            <h2 className="text-white font-clash text-4xl md:text-5xl font-semibold tracking-[1px] mb-6">
              Intelligence, Built for People.
            </h2>
            <p className="text-white/50 text-lg max-w-md leading-relaxed font-satoshi">
              We believe that the next era of technology isn't about replacing
              humans; it's about elevating them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Feature 1 */}
            <div className="feature-card-item space-y-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/icon-convergence.svg"
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-white text-2xl font-clash font-bold">
                The Convergence
              </h4>
              <p className="text-white/40 text-[15px] leading-relaxed font-satoshi">
                We are the point where creators, coders, and global innovators
                collide.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card-item space-y-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/icon-purpose.svg"
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-white text-2xl font-clash font-bold">
                The Purpose
              </h4>
              <p className="text-white/40 text-[15px] leading-relaxed font-satoshi">
                Technology creates the capacity; you create the meaning. Our
                spaces are designed to foster unplanned collisions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card-item space-y-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/icon-ambition.svg"
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-white text-2xl font-clash font-bold">
                The Ambition
              </h4>
              <p className="text-white/40 text-[15px] leading-relaxed font-satoshi">
                This is a home for individuals ready to lead the AI revolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
