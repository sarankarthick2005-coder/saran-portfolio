"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Competency {
  icon: string;
  title: string;
  desc: string;
}

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const competencies: Competency[] = [
    {
      icon: "factory",
      title: "Manufacturing Exposure",
      desc: "Hands-on expertise in CNC machining, additive manufacturing, and lean production workflows for complex assemblies.",
    },
    {
      icon: "analytics",
      title: "Analysis & Simulation",
      desc: "Proficient in FEA, CFD, and kinematic modeling to validate designs before they hit the production floor.",
    },
    {
      icon: "inventory_2",
      title: "Product Development",
      desc: "End-to-end management of the product lifecycle, from initial CAD sketches to prototyping and final testing.",
    },
    {
      icon: "science",
      title: "Research Mindset",
      desc: "A methodical approach to uncovering innovative solutions through data-driven experimentation and literature review.",
    },
    {
      icon: "robot_2",
      title: "Automation & Robotics",
      desc: "Integrating sensors, actuators, and control systems to create autonomous machines and smart factory solutions.",
    },
    {
      icon: "history_edu",
      title: "Technical Writing",
      desc: "Communicating complex engineering data into clear, actionable documentation and published research papers.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero/Intro Section */}
      <section className="px-6 md:px-margin-desktop pt-16 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(26,58,58,0.1)] relative z-10">
                <img
                  className="w-full h-full object-cover"
                  alt="A professional portrait of Saran Karthick"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhtqCGfE_iJIB7JAyDnlTNd7w-74u_b0oryrbZjfFIiK4fiq0pzit4rAcMKWTnvL7-U0kIzaVN361OHZP70yFhH3Bvxv85Sq3z5uBswOeKv6-AX9DP4r4UJRnL7iOKaSkgOec-AAsXfCaJyBeuNBvy3frocpKoXNYnocGgecjyVh5PK_I54Oj3gVgv59IzT9jO9krVPgpvUC59tNyLZrAL1LqY0pwde7c3vwwham5LYt77nbONcNU0PNsDC-jSfP9CkJdrgQ7wkc"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-0"></div>
            </div>

            {/* Right Intro details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">
                About Me
              </span>
              <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-primary leading-tight font-bold">
                Merging precision{" "}
                <span className="relative inline-block">
                  engineering
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary-container/30 -z-10"></span>
                </span>{" "}
                with creative problem-solving.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                I am a Mechanical Engineer with a passion for transforming complex theoretical concepts into tangible,
                high-performance physical systems. My journey spans the intersection of robotics, advanced
                manufacturing, and multidisciplinary research.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full">
                  <span className="material-symbols-outlined text-primary text-[20px]">school</span>
                  <span className="font-label-sm text-label-sm text-on-surface">Mechanical Engineering</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full">
                  <span className="material-symbols-outlined text-primary text-[20px]">precision_manufacturing</span>
                  <span className="font-label-sm text-label-sm text-on-surface">Robotics & AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Competencies */}
      <section className="bg-surface-container-low py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Competency Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {competencies.map((comp, index) => (
                <div
                  key={index}
                  className="bg-surface p-6 md:p-8 rounded-3xl shadow-[0_10px_40px_rgba(26,58,58,0.05)] hover:translate-y-[-4px] transition-all duration-300 group"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease ${index * 0.1}s`,
                  }}
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">
                      {comp.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-[20px] text-primary mb-3 font-bold">
                    {comp.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side: Biographical Context */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="flex flex-col gap-6 md:gap-8">
                <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold">
                  What do I bring as an engineer?
                </h2>
                <div className="space-y-6 font-body-lg text-on-surface-variant leading-relaxed text-sm md:text-base">
                  <p>
                    In an era where digital and physical worlds converge, I position myself as a multidisciplinary
                    mechanical engineer who understands both the structural integrity of a chassis and the logic of
                    the code that drives it.
                  </p>
                  <p>
                    My philosophy is rooted in <strong>&quot;Functional Aesthetics&quot;</strong>—designing systems that
                    are not only robust and efficient but also elegantly simple to operate and maintain. I thrive in
                    collaborative environments where high-level theoretical research meets practical, industrial
                    application.
                  </p>
                  <p>
                    Whether it's optimizing a hydraulic circuit or training a neural network for defect detection on an
                    assembly line, I focus on scalable impact and technical excellence.
                  </p>
                </div>
                <div className="pt-6 border-t border-outline-variant flex flex-col gap-4">
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      Current Focus
                    </span>
                    <span className="font-body-md text-primary font-bold">Autonomous Robotics</span>
                  </div>
                  <div className="flex justify-between items-center text-sm md:text-base">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      Experience
                    </span>
                    <span className="font-body-md text-primary font-bold">3+ Years R&D</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop">
        <div className="max-w-[1000px] mx-auto bg-primary-container rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_30px_70px_rgba(1,36,37,0.2)]">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container rounded-full blur-[100px] -ml-48 -mb-48"></div>
          </div>
          <div className="relative z-10">
            <h2 className="font-headline-lg text-3xl md:text-5xl text-white mb-6 font-bold leading-tight">
              Let's build the future of machinery together.
            </h2>
            <p className="font-body-lg text-primary-fixed mb-10 max-w-2xl mx-auto opacity-90 text-sm md:text-base leading-relaxed">
              Currently open to research collaborations and innovative engineering roles in the automotive and
              robotics sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="bg-secondary-container text-on-secondary-container px-8 md:px-10 py-3 md:py-4 rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 text-center cursor-pointer text-xs md:text-sm font-bold"
                href="/contact"
              >
                Get In Touch
              </Link>
              <button className="border-2 border-primary-fixed text-primary-fixed px-8 md:px-10 py-3 md:py-4 rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-fixed/10 transition-all cursor-pointer text-xs md:text-sm font-bold">
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
