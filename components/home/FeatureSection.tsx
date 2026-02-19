"use client";
import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const FeatureSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const linesRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      // 1. Text Fill Animation

      gsap.to(".reveal-text", {
        backgroundSize: "100% 100%",
        stagger: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
      if (!linesRef.current || !textRef.current) return;

      // 2. SVG Lines Animation (Left to Right Fill)
      const paths = linesRef.current.querySelectorAll("path");
      paths.forEach((path: any) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: linesRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 2,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-24 pt-7 overflow-hidden"
    >
      {/* Background Blur Effect (400px Blur) */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-20 items-center">
          {/* Left Side: Content */}
          <div className="space-y-12">
            <div className="w-full max-w-2xl font-clash">
              {/* Header Section */}
              <div className="pb-6 border-b border-white/10">
                <h3 className="text-white text-[42px] font-medium tracking-tight">
                  Co Working space
                </h3>
              </div>

              {/* 1. DATA HUB (Expanded Section) */}
              <div className="py-9 border-b border-white/10">
                <div className="flex justify-between items-center gap-8">
                  <div className="space-y-4">
                    <h4 className="text-[22px] font-bold tracking-[0.15em] uppercase">
                      <span className="text-brand-cyan">DATA</span>{" "}
                      <span className="text-white">HUB</span>
                    </h4>
                    <p className="text-white/50 text-[14px] max-w-[420px] leading-relaxed font-satoshi font-normal">
                      We have moved beyond smart cities. Calinova designs
                      environments that sense, respond, and evolve. In an era
                      where AI meets architecture, our infrastructure adapts to
                      your work.
                    </p>
                  </div>

                  {/* Explore Button */}
                  <button className="group relative text-white cursor-pointer overflow-hidden flex items-center gap-2 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)]  px-4 py-3 rounded-full text-[10px] font-medium uppercase tracking-widest shrink-0 transition-all duration-500 hover:scale-105 shadow-[0_0_10px_rgba(51,226,197,0.3)] hover:shadow-[0_0_20px_rgba(51,226,197,0.5)]">
                    {/* 1. Shine Effect Layer (Behind the text) */}
                    <span className="absolute inset-0 flex justify-center">
                      <span className="relative h-full w-8 bg-white/40 blur-[12px] -skew-x-[45deg] -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
                    </span>

                    {/* 2. Button Content */}
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Calinova
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </span>
                  </button>
                </div>
              </div>

              {/* 2. CO WORKING (Collapsed) */}
              <div className="py-8 border-b border-white/10">
                <h4 className="text-[22px] font-bold tracking-[0.15em] uppercase">
                  <span className="text-white">CO </span>
                  <span className="bg-[radial-gradient(102.39%_165.83%_at_3.72%_12.76%,#33E2C5_0%,#0681BF_100%)] bg-clip-text text-transparent">
                    WORKING
                  </span>
                </h4>
              </div>

              {/* 3. AI HUB (Collapsed) */}
              <div className="py-8 border-b border-white/10">
                <h4 className="text-[22px] font-bold tracking-[0.15em] uppercase">
                  <span className="text-brand-cyan">AI</span>{" "}
                  <span className="text-white">HUB</span>
                </h4>
              </div>
            </div>
          </div>

          {/* Right Side: Floating Image */}

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[400px] aspect-[4/5]">
              {/* 1. Background Image 1 (Top Left - Behind) */}
              <div className="absolute -bottom-30 left-40 w-[100px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 opacity-20 -z-10 blur-[2px]">
                <Image
                  src="/images/feature.svg"
                  alt="Server Room 2"
                  fill
                  className="object-cover text-[0px]"
                />
              </div>

              {/* 2. Background Image 2 (Bottom Right - Behind) */}
              <div className="absolute -bottom-10 -right-20 w-[140px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 opacity-30 -z-10 blur-[1px]">
                <Image
                  src="/images/feature.svg"
                  alt="Server Room 3"
                  fill
                  className="object-cover text-[0px]"
                />
              </div>

              {/* 3. Side Small Card (Right Side Overlay) */}
              <div className="absolute bottom-[10px] -right-8 -translate-y-1/2 w-[50px] h-[178px] overflow-hidden  shadow-2xl z-20 hidden md:block">
                <Image
                  src="/images/fe.png"
                  alt="Server Room 4"
                  fill
                  className="object-cover text-[0px]"
                />
              </div>

              <div className="animate-float relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-black">
                <Image
                  src="/images/feature.svg"
                  alt="Server Room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text Animation Section */}
        <div className="mt-32 relative mb-30 ">
          <h2
            ref={textRef}
            className="font-clash text-5xl md:text-7xl lg:text-6xl font-bold uppercase leading-[1.15] tracking-[2px] z-999"
          >
            <span className="reveal-text text-white/10 bg-gradient-to-r from-brand-cyan to-brand-blue bg-[length:0%_100%] bg-no-repeat bg-clip-text">
              Innovating Technology
            </span>
            <br />
            <span className="reveal-text text-white/10 bg-gradient-to-r from-brand-cyan to-brand-blue bg-[length:0%_100%] bg-no-repeat bg-clip-text">
              Solutions for a
            </span>
            <br />
            <span className="reveal-text text-white/10 bg-gradient-to-r from-brand-cyan to-brand-blue bg-[length:0%_100%] bg-no-repeat bg-clip-text">
              Connected Future
            </span>
          </h2>
        </div>
      </div>

      {/* Bottom Torn Edge Image Section */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent z-0" />
        <Image
          src="/images/bottom-jagged.png"
          alt="edge"
          fill
          className="object-cover object-top opacity-100 z-25"
        />
      </div>

      {/* Container for Figma Exported Lines */}
      <div className="absolute bottom-[-30px] left-0 w-full h-[500px] pointer-events-none overflow-hidden">
        {/* 1. Default Dim Lines  */}
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/images/line.svg"
            alt="lines-bg"
            fill
            className="object-contain object-center scale-100 z-99"
          />
        </div>

        {/* 2. Highlighted Lines  */}
        <div className="reveal-lines absolute inset-0">
          <Image
            src="/images/line.svg"
            alt="lines-highlight"
            fill
            className="object-contain object-center scale-100 z-99"
            // style={{ filter: "brightness(1) saturate(1)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
