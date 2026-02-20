"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const verticals = [
  "R&D LABS",
  "AI HUB",
  "CO-WORKING INTELLIGENCE SPACES",
  "ENTERPRISE DATA CENTERS",
];

const AboutVerticals = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const blurGradient =
    "radial-gradient(102.39% 165.83% at 3.72% 12.76%, #33E2C5 0%, #0681BF 100%)";

  useGSAP(
    () => {
      // 1. Text Animation
      gsap.from(".verticals-title", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // 2. Infinite Marquee Animation

      if (marqueeRef.current) {
        gsap.to(".marquee-content", {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: "none",
        });
      }

      // 3. Background Images subtle floating
      gsap.to(".bg-image-item", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white py-32 md:py-32 overflow-hidden min-h-[80vh] flex flex-col justify-center"
    >
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* 1. Top Left Blur */}
      <div
        className="absolute -top-20 -left-20 w-[600px] h-[600px] opacity-20 blur-[120px] rounded-full pointer-events-none"
        style={{ background: blurGradient }}
      />

      {/* 2. Bottom Right Blur */}
      <div
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] opacity-15 blur-[120px] rounded-full pointer-events-none"
        style={{ background: blurGradient }}
      />

      {/* 3. Floating Background Images (Opacity 5-10%) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-image-item absolute top-[20%] left-[25%] w-20 h-32 opacity-[0.08]">
          <Image
            src="/images/feature.svg"
            alt="bg-img"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-image-item absolute top-[50%] left-[45%] w-32 h-44 opacity-[0.1]">
          <Image
            src="/images/feature.svg"
            alt="bg-img"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-image-item absolute top-[12%] right-[24%] w-24 h-36 opacity-[0.08]">
          <Image
            src="/images/feature.svg"
            alt="bg-img"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-image-item absolute bottom-[40%] right-[30%] w-26 h-38 opacity-[0.07]">
          <Image
            src="/images/feature.svg"
            alt="bg-img"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container mx-auto px-6 md:px-20 relative z-10 text-center">
        <h2 className="verticals-title text-black font-clash text-3xl md:text-5xl lg:text-[54px] font-bold leading-[1.3] tracking-[1px] max-w-5xl mx-auto uppercase">
          CALINOVA IS AN INTEGRATED AI INFRASTRUCTURE ECOSYSTEM BUILT ON FOUR
          POWERFUL VERTICALS
        </h2>
      </div>

      {/* --- HORIZONTAL MARQUEE --- */}
      <div className="mt-24 md:mt-22 border-y border-black/5 py-5 relative overflow-hidden">
        <div
          ref={marqueeRef}
          className="marquee-content flex whitespace-nowrap gap-12 items-center"
        >
          {/* We repeat the items to ensure seamless loop */}
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12">
              {verticals.map((text, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span className="text-black font-clash text-lg md:text-2xl font-bold tracking-[2px] uppercase">
                    {text}
                  </span>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: blurGradient }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Jagged Edge (Black color to match next section) */}
      <div className="absolute bottom-[-65] left-0 w-full h-24 pointer-events-none z-20">
        <Image
          src="/images/bottom-jagged.png"
          alt="edge"
          fill
          className="object-cover object-top"
        />
      </div>
    </section>
  );
};

export default AboutVerticals;
