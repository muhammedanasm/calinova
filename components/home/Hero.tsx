"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // MainWrapper-ൽ കണ്ടന്റ് വിസിബിൾ ആകുമ്പോൾ മാത്രം അനിമേഷൻ തുടങ്ങാൻ
      // നമ്മൾ ഒരു ചെറിയ ഡിലേ (preloader ടൈം) കൂടി കണക്കിലെടുക്കുന്നു.
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. Heading അനിമേഷൻ (Letters and Logo)
      tl.from(".hero-title-part", {
        y: 120,
        opacity: 0,
        rotateX: -20,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
      })
        // 2. Button entrance
        .from(
          ".hero-btn",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        // 3. Right side card entrance
        .from(
          ".hero-card",
          {
            x: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1",
        );

      // Floating animation for the right card (Parallax effect)
      gsap.to(".hero-card", {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full flex items-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center gap-12">
        {/* Left Side: Content */}
        <div>
          <h1 className="hero-text text-5xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
            Innovation’s Next <br />
            Chapter Begins Here
          </h1>

          <div className="hero-text mt-8">
            <button className="group relative cursor-pointer overflow-hidden flex items-center gap-3 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] px-8 py-4 rounded-full font-semibold uppercase text-[12px] tracking-widest hover:scale-105 transition-all duration-500 shadow-[0_0_15px_rgba(51,226,197,0.2)] hover:shadow-[0_0_30px_rgba(51,226,197,0.4)]">
              {/* 1. Shine Effect Layer */}
              <span className="absolute inset-0 flex justify-center">
                <span className="relative h-full w-12 bg-white/30 blur-[20px] -skew-x-[45deg] -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-[1000ms] ease-in-out" />
              </span>

              {/* 2. Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                Enter the Hub{" "}
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Right Side: Floating UI Element (Optional based on Figma) */}
        <div className="hero-video-card hidden md:block relative group md:ml-auto">
          <div className="w-[350px] h-[200px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 p-2">
            <Image
              src="/images/banner.svg"
              alt="Calinova Innovation Hub"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
              priority // ഹീറോ സെക്ഷൻ ആയതുകൊണ്ട് വേഗത്തിൽ ലോഡ് ആവാൻ
            />
          </div>
          <p className="mt-4 text-white/50 text-sm max-w-[300px] leading-relaxed">
            Where sentient architecture, sustainable technology, and human
            ambition converge to build the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
