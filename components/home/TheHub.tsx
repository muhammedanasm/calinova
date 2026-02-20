"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const hubItems = [
  {
    id: "nucleu",
    title: "The Nucleu",
    image: "/images/card1.svg",
  },
  {
    id: "forge",
    title: "The Forge",
    image: "/images/card2.svg",
  },
  {
    id: "catalyst",
    title: "The Catalyst",
    image: "/images/card3.svg",
  },
  {
    id: "commons",
    title: "The Commons",
    image: "/images/card1.svg",
  },
];

const TheHub = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Entrance Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".hub-content", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        ".hub-item",
        {
          y: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.5",
      );

      // Mouse Follow Effect
      const moveImage = (e: MouseEvent) => {
        if (!imageRevealRef.current) return;
        gsap.to(imageRevealRef.current, {
          x: e.clientX - 150,
          y: e.clientY - 150,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", moveImage);
      return () => window.removeEventListener("mousemove", moveImage);
    },
    { scope: containerRef },
  );

  //   const handleMouseEnter = (img: string) => {
  //     setActiveImage(img);
  //     gsap.to(imageRevealRef.current, {
  //       scale: 1,
  //       opacity: 1,
  //       rotate: 5,
  //       duration: 0.4,
  //       ease: "back.out(1.7)",
  //     });
  //   };

  //   const handleMouseLeave = () => {
  //     gsap.to(imageRevealRef.current, {
  //       scale: 0.7,
  //       opacity: 0,
  //       rotate: 0,
  //       duration: 0.3,
  //       ease: "power2.in",
  //       onComplete: () => setActiveImage(null),
  //     });
  //   };

  const handleMouseEnter = (img: string) => {
    setActiveImage(img); // ആദ്യം ഇമേജ് സെറ്റ് ചെയ്യുക
    gsap.to(imageRevealRef.current, {
      opacity: 1,
      scale: 1,
      rotate: 5,
      duration: 0.5,
      ease: "power3.out",
      overwrite: true, // നിലവിലുള്ള പഴയ അനിമേഷനുകളെ ഇത് ഓവർറൈറ്റ് ചെയ്യും (Blink ഒഴിവാക്കാൻ)
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRevealRef.current, {
      opacity: 0,
      scale: 0.7,
      rotate: 0,
      duration: 0.4,
      ease: "power3.in",
      overwrite: true,
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white py-10 pb-40 overflow-hidden "
    >
      {/* Background Architectural Sketch */}
      <div className="absolute inset-0  pointer-events-none select-none z-0">
        <Image
          src="/images/bg.png"
          alt="sketch"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <div className="hub-content space-y-10 lg:sticky lg:top-40">
            <h2 className="text-[#010205] font-clash text-5xl md:text-[54px] font-bold leading-[0.9] tracking-[2px]">
              The Hub
            </h2>
            <div className="space-y-6 max-w-md">
              <p className="text-black/60 text-base leading-relaxed font-satoshi">
                We have moved beyond smart cities. Calinova designs environments
                that sense, respond, and evolve. In an era where AI meets
                architecture.
              </p>
              <p className="text-black/60 text-base leading-relaxed font-satoshi">
                Technology creates the space; you create the purpose. From AI
                labs to open commons, this is where people and technology meet
                to solve the world's hardest problems.
              </p>
            </div>

            <button className="group relative cursor-pointer overflow-hidden flex items-center gap-3 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] px-8 py-4 rounded-full font-semibold uppercase text-[12px] tracking-widest hover:scale-105 transition-all duration-500 shadow-[0_0_15px_rgba(51,226,197,0.2)] hover:shadow-[0_0_30px_rgba(51,226,197,0.4)] text-white">
              {/* Shine Effect Layer */}
              <span className="absolute inset-0 flex justify-center">
                <span className="relative h-full w-12 bg-white/30 blur-[20px] -skew-x-[45deg] -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-[1000ms] ease-in-out" />
              </span>

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                Explore Calinova
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </span>
            </button>
          </div>

          {/* RIGHT LIST (Titles) */}
          <div className="hub-list relative w-full z-20">
            {hubItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.image)}
                onMouseLeave={handleMouseLeave}
                className="hub-item group flex justify-between items-center py-10 md:py-10 border-b border-black/10 cursor-pointer transition-all hover:pl-4"
              >
                <h3
                  className="text-black text-3xl md:text-4xl font-clash font-semibold tracking-tight 
group-hover:bg-gradient-to-r 
group-hover:from-[#33E2C5] 
group-hover:to-[#0681BF] 
group-hover:bg-clip-text 
group-hover:text-transparent 
transition-all duration-300"
                >
                  {item.title}
                </h3>

                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 group-hover:border-[#33E2C5] group-hover:bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] transition-all duration-500">
                  <ArrowUpRight
                    size={24}
                    className="text-black/30 group-hover:text-black transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={imageRevealRef}
        className="fixed top-0 left-0 w-[150px] md:w-[180px] h-[150px] md:h-[180px] z-[100] pointer-events-none opacity-0 scale-75 rounded-2xl overflow-hidden hidden lg:block"
      >
        {activeImage && (
          <Image
            src={activeImage || ""}
            alt="preview"
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* top */}
      <div className="absolute top-[-60px] left-0 w-full h-32 z-30 pointer-events-none">
        <Image
          src="/images/bottom-jagged.png"
          alt="edge"
          fill
          // className="object-cover object-top"
        />
      </div>

      <div className="absolute bottom-[-65px] left-0 w-full h-32 z-30 pointer-events-none">
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

export default TheHub;
