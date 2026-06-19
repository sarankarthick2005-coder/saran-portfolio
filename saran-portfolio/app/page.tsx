"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Metric {
  value: string;
  label: string;
}

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animated card reveal after load
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const metrics: Metric[] = [
    { value: "7.99", label: "CGPA" },
    { value: "20+", label: "Books" },
    { value: "5+", label: "Trainings" },
    { value: "5+", label: "Major Projects" },
    { value: "Mult.", label: "Certs" },
    { value: "₹15k", label: "Hackathon" },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section: Centered Layout with Brush Stroke */}
      <section className="relative px-6 md:px-10 py-20 md:py-24 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Teal Abstract Brush Stroke Behind Image */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] brush-stroke z-0 pointer-events-none"></div>
        
        <div className="z-10 relative flex flex-col items-center max-w-4xl">
          {/* Profile Image Container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 md:mb-10">
            <div className="absolute inset-0 bg-primary-container rounded-full rotate-6 scale-105 opacity-10"></div>
            <div className="w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-surface-container relative">
              <img
                alt="Saran Profile Portrait"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQwnTpxJNDNz6XC_p0pzQhtmAoeGgNEYHXmnQMUp6maF7JPROth0KWxLojFx8ULH3quxvryn85lB5HMM1PAOR1903TSr-Le-3Fgq2TvIkY1A1wDNf9WPh0YjHgP9HpeYjkkFMswH1PYm-5-GMMA-tDVa_jPUhQtXDqSLFM7AIMiGVzmW0ThO12OY2wSsy27SqVT1uPdIrs23hByJa-PlsWJc-3b1PpiSmM4wIiDtEYzWZ3hr1eDBl83tS-NyyaY-NsTql6CIYmPs"
              />
            </div>
          </div>

          <span className="font-label-caps text-secondary tracking-[0.2em] mb-4 uppercase font-bold text-xs">
            Mechanical Engineer & Product Developer
          </span>
          <h1 className="text-primary text-4xl md:text-6xl lg:text-7xl mb-8 font-extrabold tracking-tight font-headline-display">
            Hey There, I’m Saran
          </h1>
          <p className="text-on-surface-variant max-w-2xl mb-10 md:mb-14 leading-relaxed text-base md:text-lg font-body-lg">
            Mechanical Engineering Student | Product Developer | Research Enthusiast | Future Industry Leader
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            <Link
              className="flex min-w-[180px] md:min-w-[200px] h-14 md:h-16 items-center justify-center rounded-full bg-primary text-on-primary font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-lg cursor-pointer"
              href="/projects"
            >
              View Projects
            </Link>
            <button className="flex min-w-[180px] md:min-w-[200px] h-14 md:h-16 items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-base md:text-lg hover:bg-primary hover:text-white transition-all cursor-pointer">
              Download Resume
            </button>
          </div>

          {/* Secondary Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-8 border-t border-outline-variant/30 w-full max-w-lg">
            <span className="text-outline-variant font-label-caps text-[10px] tracking-widest uppercase font-bold">
              Explore More:
            </span>
            <Link
              className="text-primary text-sm font-bold border-b border-secondary hover:text-secondary transition-colors"
              href="/experience"
            >
              Experience
            </Link>
            <Link
              className="text-primary text-sm font-bold border-b border-secondary hover:text-secondary transition-colors"
              href="/gallery"
            >
              Engineering Gallery
            </Link>
            <Link
              className="text-primary text-sm font-bold border-b border-secondary hover:text-secondary transition-colors"
              href="/publications"
            >
              Research
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Metrics Section */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-surface-container-lowest">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-4 mb-10 md:mb-14">
            <div className="h-[1px] flex-1 bg-outline-variant opacity-30"></div>
            <h3 className="font-label-caps text-outline uppercase tracking-[0.2em] text-[10px] font-bold">
              Professional Metrics
            </h3>
            <div className="h-[1px] flex-1 bg-outline-variant opacity-30"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="metric-card bg-surface p-6 md:p-8 rounded-2xl border border-surface-container text-center"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${index * 0.1}s`,
                }}
              >
                <div className="text-2xl md:text-3xl font-extrabold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-[10px] font-bold text-outline tracking-wider uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
