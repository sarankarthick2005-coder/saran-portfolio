"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Cert {
  title: string;
  tag: string;
  desc: string;
  org: string;
  icon: string;
}

export default function Achievements() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const certs: Cert[] = [
    {
      title: "CSWA",
      tag: "CERTIFIED ASSOCIATE",
      desc: "Certified SOLIDWORKS Associate in Mechanical Design, demonstrating foundational CAD expertise.",
      org: "Dassault Systèmes",
      icon: "workspace_premium",
    },
    {
      title: "SOLIDWORKS",
      tag: "ADVANCED TRAINING",
      desc: "Intensive training covering complex surface modeling and assembly optimization.",
      org: "Professional Workshop",
      icon: "model_training",
    },
    {
      title: "ANSYS",
      tag: "FEA & SIMULATION",
      desc: "Comprehensive simulation training focusing on structural analysis and CFD.",
      org: "CAE Excellence",
      icon: "engineering",
    },
    {
      title: "EV Battery",
      tag: "SPECIALIZATION",
      desc: "In-depth study of Lithium-ion technology, BMS design, and thermal management.",
      org: "Future Mobility Academy",
      icon: "electric_car",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Header Section */}
      <section className="relative px-6 md:px-margin-desktop pt-16 md:pt-24 pb-12 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps mb-6 font-bold">
            RECOGNITIONS
          </span>
          <h1 className="font-headline-display text-4xl md:text-6xl lg:text-7xl text-primary mb-6 max-w-4xl font-extrabold leading-tight">
            Milestones & Technical proficiencies.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-sm md:text-base leading-relaxed">
            A collection of honors, hackathon victories, and industry-standard certifications that validate my expertise in
            engineering design, simulation, and emerging technologies.
          </p>
        </div>
      </section>

      {/* Featured Achievement: Hackathon */}
      <section className="px-6 md:px-margin-desktop py-8 md:py-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-surface-container-lowest rounded-[24px] shadow-[0_10px_40px_rgba(26,58,58,0.05)] border border-outline-variant/30 overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="grid md:grid-cols-2 items-stretch">
              {/* Left Image */}
              <div className="relative min-h-[250px] md:min-h-[300px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz-RSU0CW0plsgokYJ35K8Gkh0tgIxTTgIh0hQBUcKAaHOT4-Qslk9x3yHL7ieKpQy4RSbcXPJdAXcAgLGG2e4wdiVPvGGgrMMUbGbsrV9QDQIx73m0fPYbS2Oo2Kp8HGDX1iu8YLhdVvyAF_eX99mfE3wZdWxt2x7ryMlPjmAdHyQI5VXt0Q3Zm0qqaaz2XPOEzUfEeyEq_D3JuanfokIguOWxFWJSJdiuLviXAzdftMPOezIZ2skmfwvYsLTpyvVAMe1j9LSWzQ"
                  alt="Autodesk Fusion 360 Hackathon trophy and screen"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>
              
              {/* Right Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="material-symbols-outlined text-secondary-container text-3xl md:text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    emoji_events
                  </span>
                  <h2 className="font-headline-md text-xl md:text-2xl text-primary font-bold">
                    Runner-Up Position
                  </h2>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-on-secondary-fixed-variant mb-4">
                  Autodesk Fusion 360 Hackathon
                </h3>
                <p className="font-body-md text-on-surface-variant mb-8 text-sm md:text-base leading-relaxed">
                  Recognized for innovative engineering design and efficient workflow optimization using Fusion 360.
                  Successfully navigated through intense design challenges to secure the second place among top engineering talent.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-outline font-bold">PRIZE POOL</span>
                    <span className="font-headline-md text-xl md:text-2xl text-secondary font-bold">₹15,000</span>
                  </div>
                  <div className="h-10 w-[1px] bg-outline-variant"></div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-outline font-bold">LOCATION</span>
                    <span className="font-headline-md text-xl md:text-2xl text-primary font-bold">Regional Finals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Bento Grid */}
      <section className="px-6 md:px-margin-desktop py-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="font-headline-md text-xl md:text-3xl text-primary font-bold">
                Professional Certifications
              </h2>
              <p className="font-body-md text-on-surface-variant text-sm md:text-base mt-2">
                Validated skills across CAD, CAE, and Sustainable Tech.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-outline-variant/30 mx-12 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-[0_10px_40px_rgba(26,58,58,0.05)] flex flex-col items-center text-center hover:translate-y-[-8px] transition-transform duration-300 border border-transparent hover:border-secondary-container"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${index * 0.1}s`,
                }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-6 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
                    {cert.icon}
                  </span>
                </div>
                <h4 className="font-headline-md text-lg md:text-xl mb-2 text-primary font-bold">
                  {cert.title}
                </h4>
                <p className="font-label-caps text-[10px] md:text-[11px] text-secondary font-extrabold mb-4 uppercase">
                  {cert.tag}
                </p>
                <p className="font-body-md text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {cert.desc}
                </p>
                <span className="mt-auto font-label-caps text-primary text-[10px] md:text-xs tracking-widest opacity-60 font-bold uppercase">
                  {cert.org}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Timeline / Micro-interactions Section */}
      <section className="px-6 md:px-margin-desktop py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-secondary mx-auto"></div>
            <div className="w-4 h-4 rounded-full bg-secondary mx-auto shadow-[0_0_15px_rgba(125,87,0,0.5)]"></div>
          </div>
          <h2 className="font-headline-md text-2xl md:text-3xl text-primary mb-6 font-bold">
            Continuous Growth
          </h2>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant mb-12 leading-relaxed">
            I believe that engineering is a journey of perpetual learning. These achievements mark milestones, but the pursuit of
            technical excellence is ongoing.
          </p>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary group border-b-2 border-secondary-container pb-1 hover:border-primary transition-all cursor-pointer font-bold text-xs md:text-sm"
          >
            VIEW FULL ACADEMIC HISTORY
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        <div
          className="absolute inset-0 -z-10 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#717878 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </section>
    </div>
  );
}
