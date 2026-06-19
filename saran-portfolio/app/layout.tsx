import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Saran Karthick S. | Portfolio",
  description: "Mechanical Engineering Student | Product Developer | Research Enthusiast | Future Industry Leader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-surface-container-low antialiased min-h-screen">
        <div className="outer-canvas flex flex-col items-center justify-center">
          {/* Main Portfolio Container */}
          <div className="w-full max-w-[1280px] bg-surface rounded-[24px] md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col min-h-screen relative">
            {/* Dotted Blueprint Grid */}
            <div className="absolute inset-0 line-pattern pointer-events-none z-0" />
            <Header />
            <main className="flex-1 flex flex-col relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
