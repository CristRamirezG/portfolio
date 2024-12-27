"use client";

import { useState, useEffect, useCallback } from "react";
import "./ui/global.css";
import { montserrat } from "./ui/fonts";
import Link from "next/link";
import { Menu, X, Home } from "lucide-react";

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentYear = new Date().getFullYear();
  // Dentro de tu componente
  const pathname = usePathname();
  const homeHref = pathname === "/" ? "#page" : "/";

  const startTypingAnimation = useCallback(() => {
    if (!isHomeHovered && !isTransitioning) {
      setIsHomeHovered(true);
      setIsTransitioning(true);
      let text = "Inicio";
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.substring(0, index));
        index++;
        if (index > text.length) {
          clearInterval(interval);
          setIsTransitioning(false);
        }
      }, 100);
    }
  }, [isHomeHovered, isTransitioning]);

  const startFadeOutAnimation = useCallback(() => {
    if (isHomeHovered && !isTransitioning) {
      setIsTransitioning(true);
      const fadeOutInterval = setInterval(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);

      setTimeout(() => {
        clearInterval(fadeOutInterval);
        setIsHomeHovered(false);
        setDisplayText("");
        setIsTransitioning(false);
      }, 300);
    }
  }, [isHomeHovered, isTransitioning]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>; // Solución genérica para ambos entornos
    if (!isHomeHovered && !isTransitioning) {
      timeout = setTimeout(() => {
        setDisplayText("");
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [isHomeHovered, isTransitioning]);
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiencia" },
    { href: "#education", label: "Educación" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.className} flex flex-col min-h-screen text-gray-100`}
      >
        <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link
                  href={homeHref}
                  className="text-2xl font-bold text-primary flex items-center w-24 overflow-hidden"
                  onMouseEnter={startTypingAnimation}
                  onMouseLeave={startFadeOutAnimation}
                >
                  <div className="relative w-24 h-8">
                    {typeof window !== "undefined" && displayText && (
                      <span className="absolute left-0 transition-all duration-300">
                        {displayText}
                      </span>
                    )}
                    <Home
                      className={`w-6 h-6 absolute left-0 transition-all duration-300 ${
                        isHomeHovered ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </nav>
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className="flex-grow container mx-auto ">
          <main className="bg-black/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 ">
            {children}
          </main>
        </div>

        <footer className="bg-black/80 text-gray-400">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <p className="text-center text-sm">
              © {currentYear}, Página realizada con Next.js, hosteada en Vercel.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
