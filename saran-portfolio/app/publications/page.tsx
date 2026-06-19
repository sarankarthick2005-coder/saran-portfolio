"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Book {
  title: string;
  desc: string;
  isbn: string;
  imgSrc: string;
  imgAlt: string;
  bestseller?: boolean;
}

export default function Publications() {
  const [animate, setAnimate] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const books: Book[] = [
    {
      title: "Mechanics of Materials",
      desc: "A comprehensive guide for diploma engineering students focusing on structural integrity and material properties.",
      isbn: "978-81-203-0000-0",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZAwllaa9c8IeUC0EAZ-yjyKaaRu1keUMvg5Kyt7dQWNydegkxrS438rlFAQkiVSBtTuH7f-M5i2IpQkYEOQPhnahsK3fD-nwegWZck6OwDtZQp3m4RWCPZLkpIaD77j_1Pf1wrs0El5ULXc6uBMQBKL7CJWMYhvtpnUYraukf2EfDsRUtoyuVkj-OgOjIo2v5SVfvFLh22OSnHMK1U6D1iH2CIpg3BYacgd6Kx4dN4_4W3FTbH4Z_uxeg-Pcy7pFfHgiktCNHt44",
      imgAlt: "Mechanics of Materials textbook cover",
      bestseller: true,
    },
    {
      title: "Electrical Engineering",
      desc: "Fundamental principles and practical applications for first-year polytechnic curriculum across multiple boards.",
      isbn: "978-81-203-0001-7",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnl7-g5d4idmzLe7rP3OhGHY2kywCoXa8VQ0RkQ1XklddEtL0TXWhqd0KfPcm2CuFKG-bsX-gqR5EdVYoj7bxYE-qJDngv0W38wkwawu_WAMvnESfolmF6WJW7xHelR-PtDJIaXk7vdGOHckgkGj8bLkJwlBAXkBPd6hPwTNkvGO8XWTtny65dxISKqmHT7AToVOap0YUeQonK3IfQAs95GoohVvXNn9ve6seKBATi4_7B1x_sn69E8gyc-tZYb8g1qd9M3-WyigM",
      imgAlt: "Basic Electrical Engineering Principles textbook cover",
    },
    {
      title: "Thermal Engineering",
      desc: "Simplifying thermodynamics and heat engines for technical students with clear illustrations and solved problems.",
      isbn: "978-81-203-0002-4",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoaJVnwZVKcwkrWn_Q33Yqu7-X6ErwzC-kx1yhasdyzaSoPkEeJ0cI1M1xiOJUnmKgRUbduidam5haj7VqHc1RznoipeTRARX5c9axWh04AMDWV-RKu5DNai3bcYQWZI2mMDzaXX0ViV3KDTomQfZTceIayvpygAb7f4CGJ2CQY1OHYbAe0oyN344D5fT9ajys11HAKyWRlcvQoH-sx3UnAcKHQQLW79ciwcyk3I7c3SpEPAbJ9ycTrdTQPiNEKYbvCbFv6MuZvRs",
      imgAlt: "Thermal Engineering Mastery textbook cover",
    },
  ];

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % books.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-12 px-6 md:px-margin-desktop overflow-hidden">
        {/* Brush Stroke Background */}
        <div className="brush-stroke -top-20 -right-20 w-[600px] h-[600px] bg-primary-container rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Left Content */}
            <div className="w-full md:w-3/5">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase font-bold">
                ACADEMIC EXCELLENCE
              </span>
              <h1 className="font-headline-display text-4xl md:text-6xl lg:text-7xl text-primary leading-tight mb-8 font-extrabold">
                Engineering Author & Academic Contributor
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-sm md:text-base leading-relaxed">
                Bridging the gap between complex engineering theories and classroom learning through meticulously crafted curriculum-oriented publications.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">menu_book</span>
                  <div>
                    <h4 className="font-bold text-primary text-sm md:text-base">20+ Academic Books</h4>
                    <p className="text-xs md:text-sm text-on-surface-variant">Authored for Engineering and Polytechnic curriculum.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">school</span>
                  <div>
                    <h4 className="font-bold text-primary text-sm md:text-base">Polytechnic Focused</h4>
                    <p className="text-xs md:text-sm text-on-surface-variant">Specialized content for technical vocational education.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">lightbulb</span>
                  <div>
                    <h4 className="font-bold text-primary text-sm md:text-base">Concept Simplification</h4>
                    <p className="text-xs md:text-sm text-on-surface-variant">Making complex technical topics accessible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">verified</span>
                  <div>
                    <h4 className="font-bold text-primary text-sm md:text-base">Curriculum Oriented</h4>
                    <p className="text-xs md:text-sm text-on-surface-variant">Aligned with latest academic standards and boards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Book Mockup */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] bg-surface-container rounded-[24px] shadow-[0_10px_40px_rgba(26,58,58,0.05)] overflow-hidden border border-outline-variant/10">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcw6VD5MB4-gtzWryBNkER5zfb2m6-V2K13x6gDvoEzChPTeVuHUMPWOHBEYQwuThBWlIolBb3ERVmPIFk4mE4tQ_7Wf_4NNsGXGqPySE_jyV6ieYTdOR1obukgtPOk4l8xEslZM6TCZwy0kq7tjW9rtDbHycSOSkYvDX6mILFnp438r5QoGz5N-qJz0iQIAYK62bk0lwkz4XeJAvYMNMFgZZx3BIOyk1GgKQsZ8Fxhz2w7p_zntQGSAoZInmvdop0opn4eqW5bOM"
                  alt="Textbook mockup on desk"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Publication Grid Section */}
      <section className="py-16 md:py-20 px-6 md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-primary font-bold">
                Featured Publications
              </h2>
              <p className="font-body-md text-on-surface-variant mt-2 text-sm md:text-base">
                A selection of core textbooks used across various technical institutes.
              </p>
            </div>
            {/* Carousel Control Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                aria-label="Previous book"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                aria-label="Next book"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Book Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, index) => {
              // Highlight the currently active book on mobile/tablet view using carouselIndex
              const isFocusedOnMobile = index === carouselIndex;
              return (
                <div
                  key={index}
                  className={`bg-surface p-6 md:p-8 rounded-[24px] shadow-[0_10px_40px_rgba(26,58,58,0.05)] hover:translate-y-[-8px] transition-all duration-500 border border-outline-variant/10 group ${
                    isFocusedOnMobile ? "ring-2 ring-secondary-container md:ring-0" : "opacity-60 md:opacity-100"
                  }`}
                  style={{
                    opacity: animate ? (isFocusedOnMobile ? 1 : 0.6) : 0,
                    transform: animate ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease ${index * 0.1}s`,
                  }}
                >
                  <div className="aspect-[4/5] bg-surface-variant rounded-xl mb-6 overflow-hidden relative border border-outline-variant/10">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={book.imgSrc}
                      alt={book.imgAlt}
                    />
                    {book.bestseller && (
                      <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest shadow-md">
                        BESTSELLER
                      </div>
                    )}
                  </div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2 font-bold">
                    {book.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                    {book.desc}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-outline-variant/20">
                    <span className="text-[10px] font-bold text-secondary tracking-wider font-mono">
                      ISBN: {book.isbn}
                    </span>
                    <button className="text-primary hover:text-secondary font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                      View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Bento Grid */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            
            <div className="md:col-span-8 bg-primary rounded-[32px] p-8 md:p-12 text-on-primary relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-headline-lg text-3xl md:text-5xl mb-6 font-bold leading-tight">
                  Educational Philosophy
                </h2>
                <p className="font-body-lg text-base md:text-lg text-primary-fixed-dim max-w-2xl leading-relaxed opacity-95">
                  I believe that true engineering mastery comes from understanding the &quot;why&quot; before the
                  &quot;how.&quot; My writing process focuses on deconstructing complex industrial concepts into
                  digestible, relatable modules for students at the beginning of their technical careers.
                </p>
                
                <div className="mt-8 md:mt-12 flex flex-wrap gap-8 md:gap-12">
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-secondary-container">20+</div>
                    <div className="text-xs font-label-caps opacity-75">Books Published</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-secondary-container">10k+</div>
                    <div className="text-xs font-label-caps opacity-75">Students Impacted</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-secondary-container">5+</div>
                    <div className="text-xs font-label-caps opacity-75">Subject Domains</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            </div>

            <div className="md:col-span-4 bg-secondary-container rounded-[32px] p-8 flex flex-col justify-between">
              <span className="material-symbols-outlined text-4xl md:text-5xl text-on-secondary-container">
                format_quote
              </span>
              <blockquote className="font-headline-md text-xl md:text-2xl text-on-secondary-container leading-snug font-bold my-4">
                &quot;Simplifying the complex is the ultimate form of professional mastery.&quot;
              </blockquote>
              <div>
                <p className="font-bold text-on-secondary-container text-sm md:text-base">Saran Karthick S.</p>
                <p className="text-xs md:text-sm text-on-secondary-container opacity-85">Author & Lecturer</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-surface-variant/40 flex flex-col items-center text-center">
              <div className="w-14 md:w-16 h-14 md:h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">edit_note</span>
              </div>
              <h4 className="font-bold text-primary mb-2 text-sm md:text-base">Curriculum Design</h4>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Actively involved in shaping the syllabus and academic pathways for vocational engineering courses.
              </p>
            </div>

            <div className="md:col-span-8 bg-surface-variant rounded-[32px] overflow-hidden relative min-h-[220px]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXpYcIE24ZuFFOWS-QMtfNy93ms-4L6CnPxbCOy9L03QN02yFFjiZI_lulw-ohfLj_eMbLPkIK9YUDvgpS-npc6QXs5_mHpuTIbA1qjq7YD3jVAnoeUEGj8vK2kdWaS8BDpjM9RpgaWHUxoXLY8nXghid5cTZY2mYWVNs3N-vrk--0-tvO4OBi-9ILbBrcw64Lcpm2j2th6RF9r8h4jRKUWQC2tIU1HY9kg40L88ZO6I2l0rO9AMEZfFDpd3wxoTwXznsJL4oxV2c"
                alt="Blueprints and textbooks stacked on desk"
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center p-8 md:p-12">
                <h3 className="text-white font-headline-lg text-2xl md:text-4xl font-extrabold leading-tight">
                  Bridging Theory & Practice
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 px-6 md:px-margin-desktop">
        <div className="max-w-[1000px] mx-auto bg-surface-container-high rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-2xl md:text-4xl text-primary mb-6 font-bold">
              Looking for academic collaborations?
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto mb-10 text-xs md:text-sm leading-relaxed">
              Whether you're an educational institution looking for curriculum consulting or a publisher seeking a
              technical author, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-on-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-label-caps text-label-caps hover:shadow-lg transition-all cursor-pointer font-bold text-xs md:text-sm">
                Request Samples
              </button>
              <Link
                href="/contact"
                className="border-2 border-primary text-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all text-center cursor-pointer font-bold text-xs md:text-sm"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
