import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto px-6 md:px-margin-desktop py-12 md:py-20 gap-8">
        {/* Description section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
          <div className="font-headline-md text-2xl text-primary mb-2 font-bold">
            Saran Karthick S.
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">
            Mechanical Engineer specializing in sustainable design, product development, and robotics.
          </p>
        </div>

        {/* Social Links and copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all duration-300"
            >
              Twitter
            </a>
            <a
              href="https://researchgate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-all duration-300"
            >
              ResearchGate
            </a>
          </div>
          <div className="font-body-md text-sm text-on-surface-variant/60">
            © 2024 Saran Karthick S. Engineered with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
