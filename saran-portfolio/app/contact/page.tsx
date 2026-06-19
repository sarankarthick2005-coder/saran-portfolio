"use client";

import { useEffect, useState } from "react";

interface ContactDetail {
  icon: string;
  title: string;
  value: string;
  bgColorClass: string;
  textColorClass: string;
}

export default function Contact() {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const details: ContactDetail[] = [
    {
      icon: "mail",
      title: "Email",
      value: "saran.eng@email.com",
      bgColorClass: "bg-primary-fixed",
      textColorClass: "text-primary",
    },
    {
      icon: "share",
      title: "LinkedIn",
      value: "@sarankarthick",
      bgColorClass: "bg-secondary-fixed",
      textColorClass: "text-secondary",
    },
    {
      icon: "call",
      title: "Phone",
      value: "+1 (555) 000-0000",
      bgColorClass: "bg-tertiary-fixed",
      textColorClass: "text-tertiary",
    },
    {
      icon: "location_on",
      title: "Location",
      value: "Chennai, India",
      bgColorClass: "bg-surface-variant",
      textColorClass: "text-on-surface-variant",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after a simulated delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      {/* Background patterns */}
      <div className="brush-accent top-[-10%] right-[-10%] w-[600px] h-[600px] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,72.9,42.2C64.4,55.2,53,66.6,39.6,73.5C26.2,80.4,10.8,82.8,-4,89.7C-18.8,96.6,-33,108,-45.6,104.9C-58.2,101.8,-69.2,84.2,-76.8,68.1C-84.4,52,-88.6,37.4,-90.8,22.7C-93.1,8.1,-93.4,-6.5,-89.1,-20.1C-84.8,-33.7,-75.9,-46.3,-64.3,-54.6C-52.7,-62.9,-38.4,-66.9,-25.1,-74.6C-11.8,-82.3,0.5,-93.7,13.6,-92C26.7,-90.3,40.6,-83.6,44.7,-76.4Z"
            fill="#446464"
            transform="translate(100 100)"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-margin-desktop py-16 md:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-label-caps text-label-caps text-secondary mb-4 tracking-[0.2em] uppercase font-bold">
              Let's Connect
            </span>
            <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-7xl text-primary mb-8 font-extrabold leading-tight">
              Start a <span className="relative inline-block">
                conversation
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary-container/40 -z-10 rounded-full"></span>
              </span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md text-sm md:text-base leading-relaxed">
              Whether you're looking for a research collaborator, a technical lead, or just want to say hi, my inbox is always open.
            </p>
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white shadow-[0_10px_40px_rgba(26,58,58,0.05)] border border-outline-variant/10 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease ${index * 0.08}s`,
                  }}
                >
                  <div className={`w-12 h-12 rounded-full ${detail.bgColorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined ${detail.textColorClass}`}>{detail.icon}</span>
                  </div>
                  <h3 className="font-label-caps text-[11px] text-on-surface-variant mb-1 font-bold uppercase">
                    {detail.title}
                  </h3>
                  <p className="font-body-md text-primary font-semibold truncate text-sm md:text-base">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-label-caps hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer font-bold text-sm">
                <span className="material-symbols-outlined">download</span>
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[24px] shadow-[0_10px_40px_rgba(26,58,58,0.05)] border border-outline-variant/10 relative overflow-hidden">
              {/* Inner decorative line pattern */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: "radial-gradient(#012425 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>
              
              {submitted ? (
                <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h3 className="font-headline-md text-2xl text-primary font-bold mb-2">Message Sent!</h3>
                  <p className="font-body-md text-on-surface-variant max-w-sm text-sm">
                    Thank you for reaching out. Saran will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold">
                        Your Name
                      </label>
                      <input
                        className="w-full form-input py-3 text-body-lg font-body-lg placeholder:text-surface-variant"
                        placeholder="John Doe"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold">
                        Email Address
                      </label>
                      <input
                        className="w-full form-input py-3 text-body-lg font-body-lg placeholder:text-surface-variant"
                        placeholder="john@example.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold">
                      Subject
                    </label>
                    <input
                      className="w-full form-input py-3 text-body-lg font-body-lg placeholder:text-surface-variant"
                      placeholder="Inquiry about Collaboration"
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold">
                      Message
                    </label>
                    <textarea
                      className="w-full form-input py-3 text-body-lg font-body-lg placeholder:text-surface-variant resize-none"
                      placeholder="Tell me more about your project..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <div className="pt-4">
                    <button
                      className="w-full md:w-auto bg-secondary text-on-secondary px-12 py-4 rounded-full font-label-caps text-label-caps hover:shadow-xl hover:bg-secondary/90 transition-all active:scale-95 cursor-pointer font-bold text-xs uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Decorative Quote/Badge */}
            <div className="mt-8 flex justify-end">
              <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md border border-white/30 px-6 py-4 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                </div>
                <p className="font-label-sm text-label-sm text-primary italic text-xs">
                  &quot;Usually responds within 24 hours&quot;
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Map / Office Hub Visual Element */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-margin-desktop pb-24 w-full relative z-10">
        <div className="rounded-[24px] overflow-hidden h-[300px] md:h-[400px] shadow-[0_10px_40px_rgba(26,58,58,0.1)] border border-outline-variant/10 relative group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYpJcFpCrVP32KpMiPy3IbAzxzvZBJCJJS7uIXbunXcdfbI26OBy-E5sJCfavqKv_2fkKZ7PQ0VdOJJHhMf6sJliY49G1FDVKPQpc59-_mX29oIft1QILIPZSNSyqXVZCsII6KqX9ooC0e6NGkfhNMh_ZWe1TXGIo8abNR6zFjwZb6X1mixdO5jIXLXCQHWS6_5GsvJQuH7KISqUFMHTBFaJ0WsMdTSM7G_nJQ6fkIFoXMK_yAUDddlQvQzPcAvXmbKyl0drH61o4"
            alt="Tech park courtyard in Chennai"
          />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border-l-4 border-secondary shadow-lg">
            <h4 className="font-headline-md text-lg md:text-xl text-primary mb-1 font-bold">Office Hub</h4>
            <p className="font-body-md text-on-surface-variant text-xs md:text-sm leading-relaxed">
              Tidel Park, Tharamani,
              <br />
              Chennai, TN 600113
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(#446464 0.5px, transparent 0.5px), linear-gradient(90deg, #446464 0.5px, transparent 0.5px)",
          backgroundSize: "80px 80px",
        }}
      ></div>
    </div>
  );
}
