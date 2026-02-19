"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

const ArchitectureSection = () => {
  const containerRef = useRef(null);
  const topHalfRef = useRef(null);
  const bottomHalfRef = useRef(null);
  const centerTextRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(topHalfRef.current, { y: 0 });
      gsap.set(bottomHalfRef.current, { y: 0 });
      gsap.set(centerTextRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(".side-element", { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(topHalfRef.current, {
        y: -130,
        duration: 1.5,
        ease: "expo.inOut",
      })
        .to(
          bottomHalfRef.current,
          {
            y: 130,
            duration: 1.5,
            ease: "expo.inOut",
          },
          "<",
        )
        .to(
          centerTextRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .to(
          ".side-element",
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#010206] flex flex-col items-center justify-center overflow-hidden py-30 pt-40"
    >
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/images/Light.svg"
          alt="light"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#33E2C5] opacity-10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#0681BF] opacity-5 blur-[200px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between h-screen py-20">
        {/* CENTER REVEAL AREA */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* REVEALED TEXT (Hidden behind the images initially) */}
          <div
            ref={centerTextRef}
            className="absolute z-10 flex items-center justify-center px-4"
          >
            <div className="relative">
              <h2 className="text-white font-clash text-4xl md:text-[74px] font-bold leading-[0.95] tracking-[2px] text-center uppercase">
                The Architecture <br /> of Intelligence
              </h2>
              <p className="hidden md:block absolute -right-60 bottom-[5px] font-bold -translate-y-1/2 text-white text-[12px] uppercase tracking-[4px] max-w-[330px] leading-tight text-left">
                Build for the next era of <br /> technology
              </p>
            </div>
          </div>

          {/* THE PILL ASSEMBLY (Flex-col ensures NO GAP) */}
          <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none">
            {/* TOP IMAGE */}
            <div
              ref={topHalfRef}
              className="relative w-[320px] h-[130px] md:w-[700px] md:h-[220px]"
            >
              <Image
                src="/images/architecture-top.svg"
                alt="top-shape"
                fill
                className="object-contain object-bottom" // താഴത്തെ അറ്റത്ത് മുട്ടി നിൽക്കാൻ
              />
            </div>

            {/* BOTTOM IMAGE */}
            <div
              ref={bottomHalfRef}
              className="relative w-[320px] h-[130px] md:w-[700px] md:h-[220px]"
            >
              <Image
                src="/images/architecture-bottom.svg"
                alt="bottom-shape"
                fill
                className="object-contain object-top" // മുകളിലെ അറ്റത്ത് മുട്ടി നിൽക്കാൻ
              />
            </div>
          </div>
        </div>

        {/* BOTTOM ELEMENTS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 items-end">
          <div className="side-element space-y-6 max-w-sm">
            <div className="relative w-48 h-28 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <video
                src="/videos/arch.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
            <p className="text-white/50 text-[13px] leading-relaxed font-satoshi max-w-xs">
              Technology creates the space; you create the purpose. From AI labs
              to open commons, this is where people and technology meet...
            </p>
          </div>

          <div className="side-element flex items-center w-full gap-4 md:gap-8">
            <div className="flex-1 h-[1px] bg-white/10 relative"></div>

            <button className="group relative cursor-pointer overflow-hidden flex items-center gap-3 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] px-5 py-3 rounded-full font-semibold uppercase text-[11px] tracking-[2px] hover:scale-105 transition-all duration-500 shadow-[0_0_15px_rgba(51,226,197,0.2)] hover:shadow-[0_0_30px_rgba(51,226,197,0.4)] text-white">
              {/* 1. Shine Effect Layer (Exact same as first button) */}
              <span className="absolute inset-0 flex justify-center">
                <span className="relative h-full w-12 bg-white/40 blur-[20px] -skew-x-[45deg] -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-[1000ms] ease-in-out" />
              </span>

              {/* 2. Button Content */}
              <span className="relative z-10 flex items-center gap-3 font-black">
                Learn More
                {/* Figma Arrow Style with circle */}
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black/10 group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={14} strokeWidth={3} />
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
