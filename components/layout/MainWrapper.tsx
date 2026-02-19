"use client";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import SmoothScroll from "../common/SmoothScroll";
import Footer from "./Footer";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className="main-content transition-opacity duration-1000 ease-in-out"
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? "hidden" : "visible",
        }}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
