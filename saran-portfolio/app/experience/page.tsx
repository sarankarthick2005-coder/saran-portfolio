"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Milestone {
  year: string;
  company: string;
  role: string;
  desc: string;
  tags?: string[];
  current?: boolean;
}

export default function Experience() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const milestones: Milestone[] = [
    {
      year: "2023 - Present",
      company: "Balakrishna Technology Solutions",
      role: "Lead Design Engineer",
      desc: "Driving high-precision engineering solutions with a focus on structural integrity and manufacturing optimization.",
      tags: ["FEA Analysis", "SolidWorks", "DFM"],
      current: true,
    },
    {
      year: "2022 - 2023",
      company: "Pricol Limited",
      role: "Design & Development Engineer",
      desc: "Focused on instrumental clusters and telematics for the automotive sector. Implemented lean design principles for large-scale production cycles.",
      tags: ["Plastic Injection", "Auto-CAD", "Prototyping"],
    },
    {
      year: "2021 - 2022",
      company: "SIMTECK Coimbatore",
      role: "Project Engineer (Analysis)",
      desc: "Specialized in CFD and thermal management for electronic enclosures. Reduced cooling system overhead by 15% through optimized airflow simulations.",
      tags: ["Ansys", "Thermal Analysis", "Fluid Dynamics"],
    },
    {
      year: "2020 - 2021",
      company: "Craftsman Automation",
      role: "Graduate Engineering Trainee",
      desc: "Hands-on exposure to high-volume manufacturing lines for engine components. Mastered CNC programming and GD&T applications.",
      tags: ["CNC Programming", "Quality Control", "GD&T"],
    },
    {
      year: "2020",
      company: "E-Vehicle Battery Training",
      role: "Technical Certification",
      desc: "Intensive training on Li-ion battery pack assembly, BMS architecture, and thermal management for green mobility solutions.",
    },
    {
      year: "2016 - 2020",
      company: "PSG College of Technology",
      role: "B.E. Mechanical Engineering",
      desc: "Core academic foundation in thermodynamics, machine design, and industrial engineering. Involved in multiple R&D projects.",
    },
    {
      year: "Until 2016",
      company: "School Education",
      role: "Foundation",
      desc: "Consistent academic excellence in Mathematics and Physics, sparking the initial interest in engineering and mechanics.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="px-6 md:px-margin-desktop py-16 md:py-24 relative overflow-hidden">
        <div className="relative z-10">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">
            Professional Evolution
          </span>
          <h1 className="font-headline-display text-4xl md:text-6xl lg:text-8xl text-primary max-w-4xl leading-tight font-extrabold">
            Engineering <br />{" "}
            <span className="relative inline-block">
              Journey
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-secondary-container/40 -z-10 rounded-full"></span>
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-8 max-w-2xl text-sm md:text-base leading-relaxed">
            A systematic trajectory through automotive design, advanced manufacturing, and structural analysis.
            Bridging the gap between conceptual CAD models and shop-floor reality.
          </p>
        </div>
        {/* Abstract Accent */}
        <div className="absolute top-10 right-0 w-64 h-64 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[200px] text-surface-tint">engineering</span>
        </div>
      </section>

      {/* Vertical Timeline Section */}
      <section className="relative px-6 md:px-margin-desktop">
        {/* Timeline Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-surface-tint/30 md:-translate-x-1/2"></div>
        
        <div className="space-y-16 md:space-y-24 relative">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-700"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {/* Left block on desktop, bottom block on mobile */}
                <div
                  className={`w-full md:w-[45%] order-2 ${
                    isEven ? "md:order-1" : "md:order-2 md:pl-12"
                  } mt-6 md:mt-0`}
                >
                  {!isEven && (
                    <span className="hidden md:block font-headline-md text-headline-md text-surface-tint/30 mb-2">
                      {milestone.year}
                    </span>
                  )}
                  {isEven && (
                    <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[24px] shadow-[0_10px_40px_rgba(26,58,58,0.05)] border border-surface-variant/50 hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                      {milestone.current && (
                        <span className="font-label-caps text-label-caps text-primary px-3 py-1 bg-primary-fixed rounded-full inline-block mb-4">
                          Current Role
                        </span>
                      )}
                      <h3 className="font-headline-md text-xl md:text-2xl text-primary font-bold">
                        {milestone.company}
                      </h3>
                      <p className="text-secondary font-label-caps text-xs md:text-sm mt-1 uppercase font-bold">
                        {milestone.role}
                      </p>
                      <div className="mt-4 space-y-3 font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
                        <p>{milestone.desc}</p>
                        {milestone.tags && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {milestone.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] uppercase font-bold tracking-widest bg-surface-container py-1 px-2 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary border-4 border-surface -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-surface rounded-full"></div>
                </div>

                {/* Right block on desktop, top block on mobile */}
                <div
                  className={`w-full md:w-[45%] order-1 ${
                    isEven ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12 md:text-right"
                  }`}
                >
                  {isEven && (
                    <span className="font-headline-md text-headline-md text-surface-tint/30 block md:text-left">
                      {milestone.year}
                    </span>
                  )}
                  {!isEven && (
                    <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[24px] shadow-[0_10px_40px_rgba(26,58,58,0.05)] border border-surface-variant/50 hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                      <h3 className="font-headline-md text-xl md:text-2xl text-primary font-bold">
                        {milestone.company}
                      </h3>
                      <p className="text-secondary font-label-caps text-xs md:text-sm mt-1 uppercase font-bold">
                        {milestone.role}
                      </p>
                      <div className="mt-4 space-y-3 font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
                        <p>{milestone.desc}</p>
                        {milestone.tags && (
                          <div className="flex flex-wrap gap-2 mt-4 md:justify-end justify-start">
                            {milestone.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] uppercase font-bold tracking-widest bg-surface-container py-1 px-2 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills & Exposure Bento Grid */}
      <section className="mt-20 md:mt-24 px-6 md:px-margin-desktop py-12">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
            Capabilities
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mt-4 font-bold">
            Core Exposure Domains
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Design Box */}
          <div className="bg-surface-container-low p-8 md:p-10 rounded-[32px] border border-surface-variant/50 relative overflow-hidden group">
            <span className="material-symbols-outlined text-[56px] md:text-[64px] text-primary mb-6 block">
              draw
            </span>
            <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-4 font-bold">Design</h4>
            <p className="text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed">
              Conceptualizing complex assemblies with a focus on ergonomics, material properties, and aesthetic functionality.
            </p>
            <ul className="mt-6 space-y-2 text-on-surface-variant font-label-sm text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Advanced 3D Surface Modeling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Design for Assembly (DFA)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Geometric Dimensioning
              </li>
            </ul>
          </div>
          
          {/* Manufacturing Box */}
          <div className="bg-primary text-on-primary p-8 md:p-10 rounded-[32px] relative overflow-hidden group">
            <span className="material-symbols-outlined text-[56px] md:text-[64px] text-secondary-container mb-6 block">
              precision_manufacturing
            </span>
            <h4 className="font-headline-md text-xl md:text-2xl text-on-primary mb-4 font-bold">
              Manufacturing
            </h4>
            <p className="text-on-primary/80 font-body-md text-sm md:text-base leading-relaxed">
              Transforming designs into physical reality through modern fabrication techniques and shop-floor management.
            </p>
            <ul className="mt-6 space-y-2 text-on-primary/70 font-label-sm text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-container rounded-full"></span> CNC & VMC Operations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-container rounded-full"></span> Tooling & Fixture Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-container rounded-full"></span> Production Optimization
              </li>
            </ul>
          </div>
          
          {/* Analysis Box */}
          <div className="bg-surface-container-low p-8 md:p-10 rounded-[32px] border border-surface-variant/50 relative overflow-hidden group">
            <span className="material-symbols-outlined text-[56px] md:text-[64px] text-primary mb-6 block">
              insights
            </span>
            <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-4 font-bold">Analysis</h4>
            <p className="text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed">
              Validating performance through computational methods to ensure safety and long-term durability.
            </p>
            <ul className="mt-6 space-y-2 text-on-surface-variant font-label-sm text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Structural FEA
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Computational Fluid Dynamics
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Thermal Simulation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 md:mt-24 bg-secondary-container rounded-[40px] p-8 md:p-24 text-center relative overflow-hidden mx-6">
        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[160px] text-on-secondary-container">
            auto_awesome
          </span>
        </div>
        <h2 className="font-headline-lg text-3xl md:text-5xl text-on-secondary-container mb-8 relative z-10 font-bold">
          Ready to build the future of engineering?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="bg-primary text-on-primary px-8 py-3 md:py-4 rounded-full font-label-caps text-label-caps hover:shadow-xl transition-all cursor-pointer font-bold text-sm">
            Download Full Resume
          </button>
          <Link
            href="/contact"
            className="border-2 border-primary text-primary px-8 py-3 md:py-4 rounded-full font-label-caps text-label-caps hover:bg-primary/5 transition-all text-center cursor-pointer font-bold text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
