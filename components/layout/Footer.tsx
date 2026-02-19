"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(footerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#010206] text-white pt-0 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-20 pt-40 pb-10">
        {/* 2. LET'S TALK - Exact Animation from Video */}
        <div className="group relative w-full border-b border-white/10 pb-12 mb-20 flex justify-center cursor-pointer overflow-hidden">
          <h1
            className="relative font-clash text-[50px] md:text-[180px] font-black leading-none tracking-[1px] uppercase 
    
    transition-all duration-[3000ms] ease-in-out
    
    bg-clip-text text-transparent
    bg-[linear-gradient(to_right,#33E2C5_0%,#0681BF_50%,#ffffff_50%,#ffffff_100%)]
    bg-[length:200%_100%]
    
    /* Default: White */
    bg-right
    
    /* Hover: Gradient fills slowly */
    group-hover:bg-left"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            LET&apos;S TALK
          </h1>
        </div>

        {/* 3. MAIN FOOTER GRID - Exact Figma Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Column 1: Logo & Nav 1 */}
          <div className="md:col-span-3 space-y-12">
            <div className="relative w-44 h-12">
              <Image
                src="/images/logo.svg"
                alt="CALINOVA"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <Link
                href="/about"
                className="block text-[15px] font-medium hover:text-[#33E2C5] transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-[#33E2C5]"
              >
                About
              </Link>
              <Link
                href="/hub"
                className="block text-[15px] font-medium hover:text-[#33E2C5] transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-[#33E2C5]"
              >
                The Hub
              </Link>
            </div>
          </div>

          {/* Column 2: Nav 2 */}
          <div className="md:col-span-4 pt-0 md:pt-[100px] space-y-6">
            <Link
              href="/coworking"
              className="block text-[15px] font-medium hover:text-[#33E2C5] transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-[#33E2C5]"
            >
              Co-Working space
            </Link>
            <Link
              href="/business"
              className="block text-[15px] font-medium hover:text-[#33E2C5] transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-[#33E2C5]"
            >
              Set up Your Business
            </Link>
          </div>

          {/* Column 3: Newsletter (Exact Figma Style) */}
          <div className="md:col-span-5 space-y-6">
            <p className="text-[15px] font-medium tracking-tight">
              Subscribe to get the latest news in your inbox.
            </p>

            <div className="relative flex items-center w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full bg-transparent border border-white/20 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-[#33E2C5] transition-colors placeholder:text-white/20"
              />
              <button
                className="absolute right-2 bg-[linear-gradient(83.45deg,_#33E2C5_-61.18%,_#0681BF_88.98%)]
 text-white px-5 py-2.5 rounded-full text-[11px] font-bold uppercase flex items-center gap-2 hover:bg-[#33E2C5] transition-all"
              >
                Subscribe <ArrowUpRight size={14} strokeWidth={3} />
              </button>
            </div>

            <div className="space-y-4 max-w-md pt-2">
              <p className="text-[12px] text-white/90 leading-relaxed font-satoshi">
                The privacy policy is available at the following{" "}
                <Link href="#" className="underline">
                  link
                </Link>
                .<br />
                This site is protected by reCAPTCHA and the Google{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline">
                  Terms of Service
                </Link>{" "}
                apply.
              </p>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-3.5 h-3.5 accent-[#33E2C5] bg-transparent border-white/20"
                />
                <label
                  htmlFor="consent"
                  className="text-[12px] text-white/90 cursor-pointer"
                >
                  I give my consent to send marketing communications
                </label>
                <input
                  type="checkbox"
                  id="consent-2"
                  className="w-3.5 h-3.5 accent-[#33E2C5] bg-transparent border-white/20 ml-2"
                />
              </div>

              <p className="text-[12px] text-white/90 leading-relaxed font-satoshi">
                I give my consent for the determination of preferences <br />{" "}
                and habits through profiling
              </p>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BAR - Address & Policies */}
        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <Link
            href="/cookies"
            className="text-[12px] text-white/90 hover:text-white underline underline-offset-4"
          >
            Cookies policy
          </Link>

          <p className="text-[12px] text-white/90 text-center leading-relaxed font-satoshi tracking-wide">
            1st floor, Sahya Building, Govt. Cyberpark, Palazhi,
            <br />
            Kozhikode, Pantheeramkavu, Kerala 673016
          </p>

          <Link
            href="/privacy"
            className="text-[12px] text-white/90 hover:text-white underline underline-offset-4"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
