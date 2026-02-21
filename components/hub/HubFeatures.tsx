"use client";
import React, { useRef, useEffect } from "react";
import { gsap, Draggable } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const features = [
  {
    title: "GPU-powered infrastructure",
    desc: 'Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do. We are the first "Intelligent Infrastructure"—a physical space designed to sense, respond, and evolve alongside its inhabitants.',
  },
  {
    title: "Model training environments",
    desc: "Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do.",
  },
  {
    title: "AI sandbox environments",
    desc: "Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do.",
  },
  {
    title: "Enterprise AI integration support",
    desc: "Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do.",
  },
  {
    title: "Industry collaboration networks",
    desc: "Calinova was born from a simple yet radical idea: that the environment you work in should be as intelligent as the work you do.",
  },
];

const HubFeatures = () => {
  const containerRef = useRef(null);
  const tagAreaRef = useRef(null);

  const radialGrad =
    "radial-gradient(102.39% 165.83% at 3.72% 12.76%, #33E2C5 0%, #0681BF 100%)";

  useGSAP(
    () => {
      // 1. Entrance Animation for rows
      gsap.from(".feature-row", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // 2. Drag and Drop Animation for Tags
      Draggable.create(".draggable-tag", {
        bounds: tagAreaRef.current,
        inertia: true, // സ്മൂത്ത് ആയി നിൽക്കാൻ
        onPress: function () {
          gsap.to(this.target, { scale: 1.1, duration: 0.2 });
        },
        onRelease: function () {
          gsap.to(this.target, { scale: 1, duration: 0.2 });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-24 md:py-32 font-satoshi"
    >
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-clash font-bold mb-20">
          Features
        </h2>

        {/* Features List */}
        <div className="space-y-0">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="feature-row group flex flex-col md:flex-row justify-between items-center py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: radialGrad }}
                />
                <h3 className="text-2xl md:text-3xl font-clash font-medium tracking-tight group-hover:pl-2 transition-all">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/70 text-[13px] leading-relaxed max-w-sm font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section with Draggable Tags */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Gradient Text */}
          <h2
            className="font-clash text-3xl md:text-4xl font-semibold leading-[1.2] tracking-tight"
            style={{
              background: radialGrad,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Designed for startups, enterprises, researchers, and AI pioneers,
            our AI Hub provides:
          </h2>

          {/* Right: Tag Area */}
          <div
            ref={tagAreaRef}
            className="relative h-[350px] w-full flex flex-wrap content-center justify-center gap-4"
          >
            <div className="draggable-tag cursor-grab active:cursor-grabbing bg-white text-black px-8 py-4 rounded-full font-bold text-sm shadow-xl -rotate-6">
              AI startups
            </div>

            <div className="draggable-tag cursor-grab active:cursor-grabbing border border-white/20 px-8 py-4 rounded-full font-bold text-sm backdrop-blur-md">
              Deep tech innovators
            </div>

            <div className="draggable-tag cursor-grab active:cursor-grabbing bg-white text-black px-8 py-4 rounded-full font-bold text-sm shadow-xl rotate-3">
              AI product companies
            </div>

            <div className="draggable-tag cursor-grab active:cursor-grabbing border border-white/20 px-10 py-4 rounded-full font-bold text-sm backdrop-blur-md -rotate-2">
              Enterprise AI transformation teams
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubFeatures;
