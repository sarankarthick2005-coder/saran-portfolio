"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface GalleryItem {
  category: "CAD Models" | "FEA & Mesh" | "On-Site";
  label: string;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  gridClass: string;
  aspectClass: string;
}

export default function Gallery() {
  const [animate, setAnimate] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"All" | "CAD Models" | "FEA & Mesh" | "On-Site">("All");

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const items: GalleryItem[] = [
    {
      category: "CAD Models",
      label: "CAD MODELING",
      title: "High-Torque Planetary Gearbox",
      desc: "SolidWorks 2023 | Full kinematic assembly with 150+ unique components.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJAztjkldvAFB4MiCbRdkGy5fhD0AP5RNzm_p4szbs7ZaTPr1NHR8-WXRoc8K7UfeFe35Gq0Qj_7GmgRo51LBbB_zqCj6P0yH6Sv_2yY77VyccikciuSKQEc7bm6aBeIsY5YxfDrfFvuKo4IsnMr6ijL3xKKIIMlPpou8FGLc8H8RUwNoG0qu-8VciB0JYZ-CEVC7D8wZuI2Y-Hx6YIucCuoy5F4BrmZVIUPWHdIQ6zscD07hmE2gzx8CcekLu1JCAZDZyNQYkz4",
      imgAlt: "3D CAD gearbox model assembly",
      gridClass: "md:col-span-8",
      aspectClass: "aspect-[16/9]",
    },
    {
      category: "FEA & Mesh",
      label: "SIMULATION",
      title: "Structural Stress Analysis",
      desc: "ANSYS Mechanical | Von-Mises stress visualization for aerospace bracket.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAET_tm19VNwVaKLR_ds-wn8kP2ovXhy0ZrVe5LAub4SErE5eVcz1Mp2KiTpFrTeXAR8V-GVlqFvqQQ1DfERmpzVceKtVYifE7501zP0_yMR86cKg8QWxr4_leD-XEHMt1EJsuq0_PYgs945QU6mqTUqRnae1rXos944yLTAGCgQqZE-sQZEr3l89AhMOwzHw-iZoiUdbp-7nCpZPPsBLZMrKykyEgocUCRxC4FB3zFprCzjkYFgmVpnh1nILlbEqS1JzRn5rRwHLI",
      imgAlt: "Finite Element Analysis stress gradient visualization",
      gridClass: "md:col-span-4",
      aspectClass: "aspect-[3/4] md:aspect-auto md:h-full",
    },
    {
      category: "CAD Models",
      label: "ADVANCED SURFACING",
      title: "Creo Parametric Surface",
      desc: "Complex geometric modeling with curvature continuity.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWJpFiyLLhWmsSBazIjk8oWuj5pM3lM6y8lCnh0Tph_8fETgjQrmvizWLQjDudPIQs4DGcbKy7FCsmDNVwx7tgmyNoYqaah2NWiE-dadzqspHJ5_I0LpzcI3FjWs8vt5XjQnObr-wfunl6FR32UzPCRf9dcK0GiNa6ERmSPf_1HbbjIrdjrpq-rByfEmNZ_P5A_Ocspxvw2Gl7esXFxVa0ZpvQLMmQmP6o9JbLjFfFKin6Mbv5O_dOYjEktuSe7wTUoaftuZk9WuE",
      imgAlt: "PTC Creo surfaced plastic component",
      gridClass: "md:col-span-4",
      aspectClass: "aspect-square",
    },
    {
      category: "On-Site",
      label: "FIELD EXPERIENCE",
      title: "Automated Assembly Line",
      desc: "Implementation of robotic arm trajectories at an automotive OEM plant.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4uLmgR2-iNPt1dfm4wtxmif0icuibQyzSbU65gMd7XFHB-gfLCKZsOeQn1pv2VAUEvHTv52Qd2qAW_2d5K8Rcv3DEfPwRppIlOOHYrUe_WAx54uIdPgn_b-kad96m_baaORyMarfmxbPYSIwMGGTSrxf0s-mZGNSi6O1qHPBw_-eKfWSBO4ZFH95wd6P0XZ4vR0OkOe4vTRmODOjiOdQ2eYc2VhrvKWAjy16Dt7inrU39okxC5o6BO4FYpKG6oUkRElGJ6vMYZZo",
      imgAlt: "Factory floor with robotic arms on assembly line",
      gridClass: "md:col-span-8",
      aspectClass: "aspect-[2/1]",
    },
    {
      category: "FEA & Mesh",
      label: "PRE-PROCESSING",
      title: "Hexahedral Mesh Optimization",
      desc: "Ensuring convergence with fine-tuned element sizing in ANSYS.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuADM2GlHtatYqxsv4y9RHByLwQSZKjv8iGW_ycwqlYI-lVV9X1eIBRUlkFAWn2I_GoK-FDlgLNFyF1OjMlJ8NBNWjJVeWTmm_gf8TBwX1aL-nVn1pOywR9wByLMKt1JS-hKgg7O0hWLpbPWMkTn1zIbmCmX_U7exsuOEUEi0XZfuROfssSvfXFNFuts7yQFTAMMJLpx81KXIdHaw9pTiIApKyqLFhzxKfnhafCr1trb7W1ICEXMBbcBoswYqsKUdsyF6NnDJlWV3NY",
      imgAlt: "Meshed turbine blade model",
      gridClass: "md:col-span-4",
      aspectClass: "aspect-square",
    },
    {
      category: "CAD Models",
      label: "INNOVATION",
      title: "Generative Design Iteration",
      desc: "Fusion 360 | AI-optimized structural frame for low-weight efficiency.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCoRGbl47xSoD8dAuAZ8PaonwFfYTKSkFeDzUIQnSa-qBIFCHnQ1-Pso9QdNofCc5NkYsHS__HZV9IQixbMmd95XO-R1nAyn7rVnBZIq9bqqx7qyqn8dDugZgarm2hwcIjiCd_HA4HwC31soHtdImqksTJNtaQbVFCB6Yw3vf0dufhKhyN_RS29TyXRiEYwsK8vQWRLnQcDbkk7rOLK-u2JLwD1SpePcltFQ5vMGym0dLEOlDie-IVC1IJCR4XzyNFnyfFBMWB4WU",
      imgAlt: "Organic looking generative bike frame design",
      gridClass: "md:col-span-4",
      aspectClass: "aspect-[4/3]",
    },
    {
      category: "CAD Models",
      label: "WORKFLOW",
      title: "Design In Progress",
      desc: "Standardized modeling practices for industrial scale projects.",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4oQ3P46S3HFOFixIDU0DGfmRVr7LaY4wvYy62jjyHykRu2MRQ39T7xW-1pbbkQAkKQ3t4_0DoTe6a2b_DuaRVLIi9OfIhhuX0QwPXvhbdvaOLIOVEdL8ZHvYV72QpxX_vzcs3DMR1KfqKQn9TLGhFGi9lKatdYe7camDj1S4b5lj45jT58wwdH6EYbBTu98qJxa-1-NC0PsVGjVRYok_4OxhbRmyF8C1N6wgk9Mgfyzvf_c27RKG9Ld1ZPyayt0V7_AkwzmUDVQA",
      imgAlt: "Workstation workstation view of a CAD design session",
      gridClass: "md:col-span-4",
      aspectClass: "aspect-[4/3]",
    },
  ];

  const filteredItems = selectedFilter === "All" ? items : items.filter((item) => item.category === selectedFilter);

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 md:px-margin-desktop py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 brush-accent -z-10 pointer-events-none"></div>
        <div className="max-w-3xl">
          <h1 className="font-headline-display text-4xl md:text-6xl lg:text-8xl text-primary mb-6 font-extrabold tracking-tight">
            Engineering Visuals
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant text-sm md:text-base leading-relaxed">
            A curated archive of mechanical designs, simulation results, and on-site factory perspectives. From
            high-fidelity CAD modeling to complex structural FEA, this gallery catalogs the technical lifecycle of
            engineering excellence.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-margin-desktop mb-8">
        <div className="flex flex-wrap gap-3">
          {(["All", "CAD Models", "FEA & Mesh", "On-Site"] as const).map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full font-label-caps text-label-caps transition-all cursor-pointer text-xs md:text-sm font-bold ${
                  isActive
                    ? "bg-primary text-on-primary shadow-md"
                    : "bg-surface-variant text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container"
                }`}
              >
                {filter === "All" ? "All Works" : filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Bento Grid */}
      <section className="px-6 md:px-margin-desktop pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`${item.gridClass} group relative overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(26,58,58,0.05)] border border-outline-variant/10 transition-all duration-500 hover:translate-y-[-8px]`}
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${index * 0.08}s`,
              }}
            >
              {/* Image element */}
              <div className={`${item.aspectClass} w-full overflow-hidden relative min-h-[220px]`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.imgSrc}
                  alt={item.imgAlt}
                />
              </div>
              
              {/* Overlay with info */}
              <div className="overlay absolute inset-0 bg-primary/95 md:bg-primary/90 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300 pointer-events-none">
                <span className="text-secondary-container font-label-caps text-label-caps mb-2 text-xs font-bold uppercase tracking-widest">
                  {item.label}
                </span>
                <h3 className="text-white font-headline-md text-lg md:text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-white/80 font-body-md mt-2 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 md:px-margin-desktop py-16 md:py-24 flex flex-col items-center text-center">
        <div className="h-1 w-24 bg-secondary-container mb-8"></div>
        <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-6 font-bold">
          Interested in the Process?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 text-sm md:text-base leading-relaxed">
          Behind every render and simulation is a systematic approach to problem-solving. View the detailed project
          documentation for technical breakdowns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link
            href="/projects"
            className="bg-primary text-on-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-label-caps text-label-caps hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer font-bold text-sm"
          >
            View Projects{" "}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <Link
            href="/contact"
            className="border-2 border-primary text-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all text-center cursor-pointer font-bold text-sm"
          >
            Inquire
          </Link>
        </div>
      </section>
    </div>
  );
}
