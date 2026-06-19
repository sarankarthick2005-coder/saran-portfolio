"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface ProjectItem {
  icon: string;
  category: string;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  ctaText: string;
  reverse?: boolean;
}

export default function Projects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const projects: ProjectItem[] = [
    {
      icon: "wb_sunny",
      category: "Renewable Energy",
      title: "Flat Plate Solar Collector",
      desc: "Optimization of thermal efficiency in solar water heating systems. This project involved designing a high-absorptivity collector surface and conducting rigorous fluid dynamic analyses to maximize heat transfer rates under varying irradiance.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhantmu2RSNfUjeTtcDlgoVD0U8zskS6FhOqbe9UgZDMHv-RlvMKfOaXzH3WRKwLBrox45Qbi2Qw-lsNpgpSvzKjUDcwydpbrdTlK2svOgFbsJWEhBHX0e6txsicWIp_s0jNpENlab01ybaBsdXdeaiBOkcEKcuHpR-sgHiv4IhH9vWlL6iSM9s2W0CltqWJeCpZtiY1nHZEMlNg2SWEXXBb-y66Wiklq58rDCzzCHFJOvcY3dL9kesrTXhvBHsHem2EajontTass",
      imgAlt: "Flat plate solar collector installation",
      ctaText: "VIEW CASE STUDY",
    },
    {
      icon: "electric_car",
      category: "Sustainable Transport",
      title: "Electric Vehicle Prototype",
      desc: "Development of a lightweight EV chassis and powertrain. Focused on battery management systems and structural integrity using composite materials to reduce weight while maintaining safety standards for urban mobility.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzHC0CSIKn8qysVbRewhzw9ROoQM7Ktb_yswZUDbvgxulgRChzjChghohI7Hq3kogHzhzgabq21JSArcTvbPDNkf0LYpNd9YT5zyA1nz1BUnulagrQ9fcQtHclY5pvU--zwUq3tXM-L_vC6MEmbbuSU1gyTW2LqHVVknUkL-2TsqDVtRdMzsiUcg-ApRWlfI8-RoQaFuvgIwTpi9XO-X7FK9cA4pASzwTqJSmVjvfPtKNd-LJQ-vFjksUjBB_bxboEIQ_OFPtmafg",
      imgAlt: "Electric vehicle prototype chassis in workshop",
      ctaText: "TECHNICAL SPECS",
      reverse: true,
    },
    {
      icon: "smart_toy",
      category: "Robotics & Automation",
      title: "Automatic Garbage Disposal Robot",
      desc: "An autonomous solution for urban waste management. The robot utilizes ultrasonic sensors for obstacle avoidance and a custom-built sorting mechanism to distinguish between recyclable and non-recyclable materials.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYcL3uqggvY4Z8c4Uv1U0wOsrEwyJt9guuVzWfIZv0jMAaFPxx7Ok4pvBUebhpW5QkLuuxl315ZRcC42YvHOiqkP9V-Fd01qe8RgsymwPFZh6eGGATsXttLehRt4T1XOr6ScJ1C9EQmD_-4QQ1Lejrcf6MuvI1AUPcAI0FKdjXGhF2y98j-PnXsBXWPjUyM1Sh02e985K3UOl49vqT3G2ol7RtZUCutDVnN0alv1dI2nCGfBwNwu5LMQocYlPICwmzHww8yMfNbt8",
      imgAlt: "Autonomous garbage disposal robot on pavement",
      ctaText: "SEE IT IN ACTION",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Header */}
      <section className="relative px-6 md:px-margin-desktop py-16 md:py-20 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-container/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-4 inline-block px-4 py-1 bg-secondary-container/20 rounded-full">
          PORTFOLIO
        </span>
        <h1 className="font-headline-display text-4xl md:text-6xl lg:text-7xl text-primary max-w-4xl leading-tight mb-6 font-extrabold">
          Engineering Solutions for a{" "}
          <span className="relative inline-block">
            Sustainable Future
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-secondary-container/40"
              preserveAspectRatio="none"
              viewBox="0 0 100 10"
            >
              <path
                d="M0 5 Q 25 0, 50 5 T 100 5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="8"
              ></path>
            </svg>
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-sm md:text-base leading-relaxed">
          A curated collection of technical explorations across renewable energy, robotics, and advanced mechanical simulation.
        </p>
      </section>

      {/* Projects list */}
      <section className="px-6 md:px-margin-desktop pb-16 md:pb-24 space-y-12">
        {projects.map((proj, index) => (
          <div
            key={index}
            className={`project-card-hover group flex flex-col ${
              proj.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(26,58,58,0.05)] border border-outline-variant/20`}
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.6s ease ${index * 0.15}s`,
            }}
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden min-h-[250px]">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={proj.imgSrc}
                alt={proj.imgAlt}
              />
            </div>

            {/* Content Container */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary">{proj.icon}</span>
                <span className="font-label-caps text-label-caps text-secondary font-bold">
                  {proj.category}
                </span>
              </div>
              <h3 className="font-headline-md text-2xl md:text-3xl text-primary mb-4 font-bold">
                {proj.title}
              </h3>
              <p className="font-body-md text-on-surface-variant mb-8 text-sm md:text-base leading-relaxed">
                {proj.desc}
              </p>
              <button className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors text-left cursor-pointer font-bold">
                {proj.ctaText}{" "}
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Advanced Research & Simulation Bento Grid */}
      <section className="bg-surface-container-high px-6 md:px-margin-desktop py-16 md:py-20 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-container/30 to-transparent"></div>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary mb-2 block uppercase font-bold">
              ADVANCED ANALYSIS
            </span>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-primary font-bold">
              Simulation & Research
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-sm hidden md:block">
            Pushing the boundaries of mechanical design through computational excellence and rigorous simulation methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Creo Reconstruction */}
          <div className="md:col-span-7 bg-surface p-8 md:p-10 rounded-[24px] shadow-sm relative overflow-hidden group border border-outline-variant/10">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary-container/10 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container mb-6 text-[40px] block">
                architecture
              </span>
              <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-4 font-bold">
                Workspace Reconstruction via Creo
              </h4>
              <p className="font-body-md text-on-surface-variant mb-6 text-sm md:text-base leading-relaxed">
                Digitizing complex industrial environments using PTC Creo. This project focused on parametric modeling of
                ergonomic workspaces to improve operational efficiency and safety protocols in manufacturing units.
              </p>
              <div className="flex flex-wrap gap-2">
                {["CAD MODELING", "ERGONOMICS", "PARAMETRIC DESIGN"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full font-label-caps text-[10px] font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ANSYS Analysis */}
          <div className="md:col-span-5 bg-primary-container p-8 md:p-10 rounded-[24px] shadow-lg text-on-primary group flex flex-col justify-between">
            <div>
              <span
                className="material-symbols-outlined text-secondary-container mb-6 text-[40px] block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                insights
              </span>
              <h4 className="font-headline-md text-xl md:text-2xl text-surface mb-4 font-bold">
                ANSYS Meshing & Structural Analysis
              </h4>
              <p className="font-body-md text-on-primary-container mb-8 text-sm md:text-base leading-relaxed">
                Conducted detailed FEA (Finite Element Analysis) on mechanical assemblies. Optimized mesh density for high-stress
                zones while maintaining computational efficiency.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "STRESS-STRAIN MAPPING",
                "FATIGUE LIFE PREDICTION",
                "MATERIAL NON-LINEARITY",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-on-primary-container font-label-caps text-xs md:text-sm font-bold"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Research Subsection */}
          <div className="md:col-span-12 bg-surface p-8 md:p-10 rounded-[24px] shadow-sm border border-outline-variant/10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-secondary-container/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-[36px] md:text-[48px]">
                auto_stories
              </span>
            </div>
            <div className="flex-grow">
              <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-2 font-bold">
                Research Initiatives
              </h4>
              <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
                Currently exploring the intersection of AI-driven optimization in thermal systems and the lifecycle analysis of
                modular electric vehicle architectures.
              </p>
            </div>
            <Link
              href="/publications"
              className="whitespace-nowrap border-2 border-primary text-primary px-6 md:px-8 py-2 md:py-3 rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer font-bold text-center w-full md:w-auto"
            >
              READ PUBLICATIONS
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-margin-desktop py-16 md:py-24 flex flex-col items-center text-center">
        <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-8 font-bold">
          Interested in collaboration?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto justify-center">
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-label-caps text-label-caps shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 group cursor-pointer text-sm font-bold"
          >
            Let's Talk{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              send
            </span>
          </Link>
          <button className="border-2 border-primary text-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-label-caps text-label-caps hover:bg-surface-container transition-all cursor-pointer text-sm font-bold">
            View More Works
          </button>
        </div>
      </section>
    </div>
  );
}
