"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Publications", href: "/publications" },
    { label: "Achievements", href: "/achievements" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-outline-variant/20">
      <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-6 md:px-margin-desktop py-4">
        {/* Brand Logo and Title */}
        <Link href="/" className="flex items-center gap-3 text-primary hover:opacity-90 transition-opacity">
          <div className="size-6 text-primary flex-shrink-0">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <div className="font-headline-md text-xl md:text-2xl text-primary font-bold tracking-tight">
            Saran Karthick S.
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label-caps text-label-caps transition-all duration-300 pb-1 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-secondary-container"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-primary p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 py-6 px-6 flex flex-col gap-4 shadow-xl z-50">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-label-caps text-label-caps py-2 border-b border-outline-variant/10 ${
                  isActive ? "text-primary font-bold pl-2 border-l-2 border-secondary-container" : "text-on-surface-variant"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button className="bg-primary text-on-primary py-3 rounded-full font-label-caps text-label-caps mt-2 hover:opacity-90 w-full cursor-pointer">
            Download Resume
          </button>
        </div>
      )}
    </header>
  );
}
