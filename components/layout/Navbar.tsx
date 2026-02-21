"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "The Hub", href: "/hub" },
  { name: "Co-working Space", href: "/co-working" },
  { name: "Set up your business", href: "/business" },
];

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });
  });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-md bg-black/10"
    >
      {/* Logo */}
      <Link href="/" className="relative w-32 h-8 cursor-pointer">
        <Image
          src="/images/logo.svg"
          alt="Calinova Logo"
          fill
          className="object-contain"
        />
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-all duration-300 relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Premium Button with Shine Effect */}
      <Link href="/contact">
        <button className="relative group overflow-hidden px-6 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-widest hover:bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)] hover:border-transparent transition-all duration-500 cursor-pointer">
          {/* 1. Shine Sweep Effect */}
          <span className="absolute inset-0 flex justify-center">
            <span className="relative h-full w-8 bg-white/40 blur-[15px] -skew-x-[45deg] -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
          </span>

          {/* 2. Button Content */}
          <span className="relative z-10">Let's Talk</span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
