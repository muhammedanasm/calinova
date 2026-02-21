"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap, Draggable } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const features = [
  {
    title: "Smart meeting rooms",
    desc: 'Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do. We are the first "Intelligent Infrastructure"—a physical space designed to sense, respond, and evolve alongside its inhabitants.',
  },
  {
    title: "Tech-enabled collaboration zones",
    desc: "Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do.",
  },
  {
    title: "Private AI project suites",
    desc: "Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do.",
  },
  {
    title: "Community events & demo days",
    desc: "Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do.",
  },
  {
    title: "Investor networking forums",
    desc: "Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do.",
  },
];

const CoworkFeatures = () => {
  const containerRef = useRef(null);
  const tagAreaRef = useRef(null);

  // നീ നൽകിയ ആ കൃത്യമായ Radial Gradient String
  const radialGradient =
    "radial-gradient(102.39% 165.83% at 3.72% 12.76%, #33E2C5 0%, #0681BF 100%)";

  useGSAP(
    () => {
      // Entrance for feature rows
      gsap.from(".cowork-feature-row", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // Tag Entrance
      gsap.from(".draggable-cowork-tag", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: tagAreaRef.current,
          start: "top 85%",
        },
      });

      // Drag Logic
      Draggable.create(".draggable-cowork-tag", {
        bounds: tagAreaRef.current,
        edgeResistance: 0.65,
        onPress: function () {
          gsap.to(this.target, { scale: 1.05 });
        },
        onRelease: function () {
          gsap.to(this.target, { scale: 1 });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-24 md:py-40 md:pb-0 overflow-hidden font-satoshi"
    >
      <div className="container mx-auto px-6 md:px-20">
        {/* Top Header Part */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 mb-24 items-start">
          <h2 className="font-clash text-3xl md:text-5xl lg:text-[42px] font-bold leading-[1.1] tracking-[1px] max-w-3xl">
            Purpose-built for founders, AI engineers, designers, product
            leaders, and venture teams — our spaces combine:
          </h2>
          <div className="group relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer bg-black">
            {/* Image with Zoom */}
            <Image
              src="/images/hub-hero-bg.png"
              alt="Lab Environment"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-[1200ms] ease-in-out group-hover:scale-105"
            />

            {/* Shine Sweep Layer */}
            <span className="absolute inset-0 flex justify-center pointer-events-none">
              <span className="relative h-full w-20 bg-white/20 blur-[40px] -skew-x-[45deg] -translate-x-[300%] group-hover:translate-x-[300%] transition-transform duration-[1200ms] ease-in-out" />
            </span>

            {/* Subtle Border Glow on Hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-700 rounded-xl" />
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-0">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="feature-row group flex flex-col md:flex-row justify-between items-center py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              {/* Left Side: Dot and Title */}
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: radialGradient }}
                />
                <h3 className="text-2xl md:text-3xl font-clash font-medium tracking-tight group-hover:pl-2 transition-all duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Right Side: Description */}
              <p className="text-white/70 text-[13px] leading-relaxed max-w-sm font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Cluster Part */}
        <div className="mt-0 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Text with Gradient */}
          <h3
            className="font-clash text-3xl md:text-3xl font-semibold leading-tight max-w-md"
            style={{
              background: radialGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We cultivate collaboration between intelligence builders
          </h3>

          {/* Right Tags (Cluster) */}
          <div
            ref={tagAreaRef}
            className="relative h-[400px] w-full flex flex-wrap content-center justify-center gap-4"
          >
            <div className="draggable-cowork-tag cursor-grab active:cursor-grabbing bg-white text-black px-10 py-5 rounded-full font-bold text-sm shadow-2xl -rotate-6">
              AI startups
            </div>

            <div className="draggable-cowork-tag cursor-grab active:cursor-grabbing border border-white/20 px-8 py-4 rounded-full font-bold text-sm backdrop-blur-md rotate-2">
              SaaS founders
            </div>

            <div className="draggable-cowork-tag cursor-grab active:cursor-grabbing bg-white text-black px-10 py-5 rounded-full font-bold text-sm shadow-2xl rotate-12">
              Innovation teams
            </div>

            <div className="draggable-cowork-tag cursor-grab active:cursor-grabbing border border-white/20 px-10 py-4 rounded-full font-bold text-sm backdrop-blur-md -rotate-3">
              Remote tech professionals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoworkFeatures;
