"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const slatsRef = useRef<HTMLDivElement[]>([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mainTl = gsap.timeline();

      // 1. Initial Reveal of Content (Blur to Clear)
      mainTl.fromTo(
        contentRef.current,
        { opacity: 0, filter: "blur(10px)", scale: 1.1 },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
      );

      // 2. Optimized Counter Logic (Synced perfectly)
      const counterObj = { value: 0 };
      gsap.to(counterObj, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => setPercentage(Math.floor(counterObj.value)),
        onComplete: () => {
          startExitSequence();
        },
      });

      function startExitSequence() {
        const exitTl = gsap.timeline({
          onComplete: () => {
            onComplete();
            gsap.set(containerRef.current, { display: "none" });
          },
        });

        exitTl
          .to(contentRef.current, {
            opacity: 0,
            y: -40,
            duration: 0.6,
            ease: "power4.in",
          })
          .to(
            slatsRef.current,
            {
              yPercent: -100,
              stagger: 0.05,
              duration: 0.8,
              ease: "expo.inOut",
            },
            "-=0.2",
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Premium Vertical Slats (The Reveal Panels) */}
      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) slatsRef.current[i] = el;
            }}
            className="h-full flex-1 bg-[#010206] border-r border-white/[0.02]"
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-[1000] flex flex-col items-center"
      >
        {/* Glowing Logo */}
        <div ref={logoRef} className="relative w-44 h-24 md:w-64 md:h-32 mb-4">
          <div className="absolute inset-0 bg-brand-cyan/20 blur-[80px] rounded-full" />
          <Image
            src="/images/logo-icon.svg"
            alt="Calinova"
            fill
            className="object-contain relative z-10"
            priority
          />
        </div>

        {/* Minimalist Counter */}
        <div className="overflow-hidden h-20 md:h-32 flex items-center">
          <span className="font-clash text-white text-6xl md:text-[120px] font-black tracking-tighter leading-none">
            {percentage}
          </span>
          <span className="text-brand-cyan text-2xl md:text-4xl font-black self-start mt-2 md:mt-6 ml-2">
            %
          </span>
        </div>

        {/* Sophisticated Tagline */}
        <div className="mt-4 flex flex-col items-center">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.6em] font-medium">
            Establishing the Digital Era
          </p>
          {/* Animated Grain Overlay for premium feel */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
