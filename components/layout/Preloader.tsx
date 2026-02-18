"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete, // Animation കഴിയുമ്പോൾ main content കാണിക്കാൻ
    });

    // 1. Initial State: Logo opacity 0 and scale up
    gsap.set(logoRef.current, { opacity: 0, scale: 0.5 });

    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "expo.out",
    })
      .to(logoRef.current, {
        scale: 1.1,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      })
      // 2. Logo moves and preloader fades out
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut",
        delay: 0.5,
      });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div ref={logoRef} className="relative w-40 h-20 md:w-64 md:h-32">
        <Image
          src="/images/logo-icon.svg" // ആ rounded gradient logo മാത്രം
          alt="Calinova Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Preloader;

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// const Preloader = ({ onComplete }: { onComplete: () => void }) => {
//   const containerRef = useRef(null);
//   const logoRef = useRef(null);
//   const topShutterRef = useRef(null);
//   const bottomShutterRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: onComplete,
//     });

//     // 1. Initial State
//     gsap.set(logoRef.current, { opacity: 0, scale: 0.7, y: 20 });

//     tl.to(logoRef.current, {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     })
//       .to(logoRef.current, {
//         scale: 1.05,
//         filter: "drop-shadow(0 0 20px rgba(51, 226, 197, 0.6))",
//         duration: 1,
//         yoyo: true,
//         repeat: 1,
//         ease: "sine.inOut",
//       })
//       // 2. Shutter Opening Effect
//       .to(logoRef.current, {
//         opacity: 0,
//         scale: 1.2,
//         duration: 0.5,
//         ease: "power2.in",
//       })
//       .to(
//         topShutterRef.current,
//         {
//           yPercent: -100,
//           duration: 1.2,
//           ease: "expo.inOut",
//         },
//         "open",
//       ) // "open" label use ചെയ്ത് ഒരേ സമയം രണ്ട് പാനലും മൂവ് ചെയ്യിക്കുന്നു
//       .to(
//         bottomShutterRef.current,
//         {
//           yPercent: 100,
//           duration: 1.2,
//           ease: "expo.inOut",
//         },
//         "open",
//       )
//       .set(containerRef.current, { display: "none" }); // പണി കഴിഞ്ഞാൽ ഫുൾ ഹൈഡ് ചെയ്യുക
//   }, [onComplete]);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
//     >
//       {/* Top Shutter Panel */}
//       <div
//         ref={topShutterRef}
//         className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-[101] border-b border-white/5"
//       />

//       {/* Bottom Shutter Panel */}
//       <div
//         ref={bottomShutterRef}
//         className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-[101] border-t border-white/5"
//       />

//       {/* Center Logo Icon */}
//       <div ref={logoRef} className="relative z-[102] w-32 h-16 md:w-52 md:h-28">
//         <Image
//           src="/images/logo-icon.svg"
//           alt="Calinova Logo"
//           fill
//           className="object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default Preloader;
