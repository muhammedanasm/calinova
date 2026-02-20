"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const AboutContent = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Content entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".about-title-left", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        ".about-desc-right",
        {
          y: 40,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 md:py-48 overflow-hidden"
      style={{
        background: "linear-gradient(0deg, #00E6C5 -38.18%, #0083C3 54.39%)",
      }}
    >
      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left Side: Title */}
          <div>
            <h2 className="about-title-left text-white font-clash text-5xl md:text-6xl font-bold tracking-tight">
              About us
            </h2>
          </div>

          {/* Right Side: Description Content */}
          <div className="space-y-10 max-w-3xl">
            <p className="about-desc-right text-white/90 text-base md:text-lg leading-relaxed font-satoshi font-medium">
              Calinova was born from a simple yet radical idea: that the
              environment you work in should be as intelligent as the work you
              do. We are the first "Intelligent Infrastructure"—a physical space
              designed to sense, respond, and evolve alongside its inhabitants.
            </p>

            <p className="about-desc-right text-white/90 text-base md:text-lg leading-relaxed font-satoshi font-medium">
              In an era where AI meets architecture, we are building the
              foundation for the future city. We bridge the gap between cold
              code and human connection, creating a sanctuary where technology
              fades into the background so that human purpose can take the lead.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Jagged Edge (Black color to match next section) */}
      <div className="absolute -bottom-[65px] left-0 w-full h-32 pointer-events-none z-20">
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

export default AboutContent;
