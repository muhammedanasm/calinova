"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const blogPosts = [
  {
    id: 1,
    date: "23.05.25",
    time: "08:20 PM",
    title: "AI News | January 10-16, 2026: Top 10 AI Breakthroughs This Week",
    description:
      "On January 15, Google introduced TranslateGemma, a new family of translation models built on its latest Gemma2 architecture. Available in 48, 128, and 278 parameter sizes, the series supports translation across 55 core languages. A key advancement is its multimodal capability, enabling it...",
    author: "Shine",
    image: "/images/blog1.svg",
  },
  {
    id: 2,
    date: "23.05.25",
    time: "08:20 PM",
    title: "AI News | January 10-16, 2026: Top 10 AI Breakthroughs This Week",
    description:
      "On January 15, Google introduced TranslateGemma, a new family of translation models built on its latest Gemma2 architecture. Available in 48, 128, and 278 parameter sizes, the series supports translation across 55 core languages.",
    author: "Shine",
    image: "/images/blog2.svg",
  },
  {
    id: 3,
    date: "23.05.25",
    time: "08:20 PM",
    title: "AI News | January 10-16, 2026: Top 10 AI Breakthroughs This Week",
    description:
      "On January 15, Google introduced TranslateGemma, a new family of translation models built on its latest Gemma2 architecture. Available in 48, 128, and 278 parameter sizes.",
    author: "Shine",
    image: "/images/blog3.svg",
  },
];

const BlogSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".blog-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#f8f9fa] py-24 overflow-hidden"
    >
      <div className="absolute bottom-[0px] right-0 w-full h-[600px] z-30 pointer-events-none">
        <Image
          src="/images/blog.svg"
          alt="edge"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Background Subtle Glow (As seen in Figma) */}
      <div className="absolute top-0 left-[200px] w-[500px] h-[500px] bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none " />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <h2 className="text-black font-clash text-5xl md:text-5xl font-semibold mb-16">
          Blog
        </h2>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-8 mb-6 border-b border-black/10 pb-4">
          <div className="col-span-3"></div>
          <div className="col-span-3 text-[10px] uppercase tracking-[2px] font-bold text-black/40">
            Date & Time
          </div>
          <div className="col-span-6 text-[10px] uppercase tracking-[2px] font-bold text-black/40">
            Name
          </div>
        </div>

        {/* Blog List */}
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-item group grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-5 border-b border-black/5 last:border-0 mb-5"
            >
              {/* Thumbnail */}
              <div className="col-span-1 md:col-span-3">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="col-span-1 md:col-span-3 pt-2">
                <p className="text-black/80 font-satoshi text-sm font-medium">
                  {post.date} <span className="mx-2 text-black/20">|</span>{" "}
                  {post.time}
                </p>
              </div>

              {/* Content Area */}
              <div className="col-span-1 md:col-span-6 space-y-4">
                <h3 className="text-black font-clash text-xl md:text-2xl font-bold leading-tight transition-colors">
                  {post.title}
                </h3>
                <p className="text-black/50 font-satoshi text-sm leading-relaxed max-w-xl">
                  {post.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 overflow-hidden relative">
                    <Image
                      src="/images/profile.svg"
                      alt="author"
                      fill
                      className="p-1 object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest text-black/80">
                    {post.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Jagged Edge (Transition to Footer) */}
      <div className="absolute -bottom-[42px] left-0 w-full h-24 z-99999 select-none pointer-events-none">
        <Image
          src="/images/bottom-jagged.png"
          alt="edge"
          fill
          className="object-cover object-top opacity-100"
        />
      </div>
    </section>
  );
};

export default BlogSection;
