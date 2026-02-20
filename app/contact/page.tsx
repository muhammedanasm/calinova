"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Send } from "lucide-react";

const ContactPage = () => {
  const containerRef = useRef(null);
  const blurGradient =
    "radial-gradient(102.39% 165.83% at 3.72% 12.76%, #33E2C5 0%, #0681BF 100%)";

  useGSAP(
    () => {
      // 1. Entrance Animation
      const tl = gsap.timeline();
      tl.from(".contact-fade", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Continuous Floating Animation for Sculptures
      gsap.to(".floating-sculpture", {
        y: -25,
        rotate: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      // 3. Background Blurs subtle move
      gsap.to(".bg-blur", {
        scale: 1.2,
        opacity: 0.6,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#010206] overflow-hidden font-satoshi"
    >
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* Top Blur Image Area */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-0 pointer-events-none opacity-40">
        <Image
          src="/images/contact-top-blur.webp"
          alt="blur"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating 3D Sculptures */}
      {/* Floating 3D Sculptures - Exactly 2 as per Figma */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left Sculpture */}
        <div className="floating-sculpture absolute top-[18%] left-[-70] w-20 h-20 md:w-36 md:h-36 opacity-80">
          <Image
            src="/images/sculpture1.png"
            alt="3d-left"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Sculpture */}
        <div className="floating-sculpture absolute top-[7%] right-[-80] w-30 h-30 md:w-52 md:h-52 opacity-90">
          <Image
            src="/images/sculpture2.png"
            alt="3d-right"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 md:px-20 pt-40 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          {/* LEFT: INFO */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="contact-fade text-white font-clash text-4xl md:text-5xl font-semibold leading-tight">
                Let's get to work
              </h2>
              <p
                className="contact-fade text-lg md:text-xl font-medium max-w-xs leading-relaxed"
                style={{
                  background:
                    "radial-gradient(102.39% 165.83% at 3.72% 12.76%, #33E2C5 0%, #0681BF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                To explore opportunities or career options, reach out to us at:
              </p>
            </div>

            <div className="contact-fade grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                <p className="text-white text-xl font-bold border-b border-white/20 pb-1 group-hover:border-brand-cyan transition-colors">
                  Sales@sample.com
                </p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-white text-xl font-bold border-b border-white/20 pb-1 group-hover:border-brand-cyan transition-colors">
                  hr@sample.com
                </p>
              </div>
            </div>

            <div className="contact-fade space-y-4 pt-10 border-t border-white/5">
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                1st floor, Sahya Building, Govt. Cyberpark, Palazhi, <br />
                Kozhikode, Pantheeramkavu, Kerala 673016
              </p>
              <p className="text-white font-bold tracking-widest">9995600765</p>
            </div>
          </div>

          {/* RIGHT: FORM CARD - Compact & Exact Figma Design */}
          <div className="contact-fade relative w-full ml-auto">
            {/* Blue Glow behind form */}
            <div className="absolute inset-0 bg-[#0681BF]/15 blur-[80px] -z-10 rounded-[2.5rem]" />

            <div className="bg-black/60 backdrop-blur-2xl border border-[#0681BF]/30 rounded-[1rem] p-8 md:p-10 shadow-2xl">
              <h3 className="text-white font-clash text-2xl font-semibold mb-1 tracking-[1px]">
                Let's Discuss
              </h3>
              <p className="text-white/60 text-[14px] mb-8 leading-tight">
                To start, use form below to tell us about you and the project
              </p>

              <form className="space-y-5">
                <div className="space-y-0.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                    Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your good name"
                    className="w-full bg-transparent border-b border-white/10 py-1.5 text-sm text-white placeholder:text-white/20 focus:border-brand-cyan outline-none transition-colors"
                  />
                </div>

                <div className="space-y-0.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email ID"
                    className="w-full bg-transparent border-b border-white/10 py-1.5 text-sm text-white placeholder:text-white/20 focus:border-brand-cyan outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-0.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                      Phone*
                    </label>
                    <input
                      type="text"
                      placeholder="+91"
                      className="w-full bg-transparent border-b border-white/10 py-1.5 text-sm text-white placeholder:text-white/20 focus:border-brand-cyan outline-none transition-colors"
                    />
                  </div>
                  {/* Timeline changed to "How soon you want to start" */}
                  <div className="space-y-0.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                      How soon you want to start
                    </label>
                    <div className="relative border-b border-white/10 py-1.5">
                      <select className="w-full bg-transparent text-sm text-white/40 outline-none appearance-none cursor-pointer">
                        <option>Select</option>
                        <option>lorem ipsm</option>
                        <option>lorem ipsm</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                        <ArrowUpRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Field: Select a service */}
                <div className="space-y-0.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                    Select a service
                  </label>
                  <div className="relative border-b border-white/10 py-1.5">
                    <select className="w-full bg-transparent text-sm text-white/40 outline-none appearance-none cursor-pointer">
                      <option>Select</option>
                      <option>lorem ipsm</option>
                      <option>lorem ipsm</option>
                      <option>lorem ipsm</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                      <ArrowUpRight size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                    Let's talk
                  </label>
                  <textarea
                    placeholder="We are happy to hear"
                    rows={2}
                    className="w-full bg-transparent border-b border-white/10 py-1.5 text-sm text-white placeholder:text-white/20 focus:border-brand-cyan outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button className="group relative overflow-hidden flex items-center gap-3 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(51,226,197,0.2)] cursor-pointer">
                    {/* Shine Effect Layer */}
                    <span className="absolute inset-0 flex justify-center">
                      <span className="relative h-full w-8 bg-white/40 blur-[15px] -skew-x-[45deg] -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
                    </span>

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center gap-2">
                      Submit
                      <div className="bg-black/10 rounded-full p-1 group-hover:bg-black/20 transition-colors">
                        <Send size={12} />
                      </div>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-50px] left-0 w-full h-64 pointer-events-none z-10 overflow-hidden">
        <Image
          src="/images/line2.svg"
          alt="decorative-lines"
          fill
          className="object-cover object-bottom opacity-40"
        />
      </div>
    </main>
  );
};

export default ContactPage;
