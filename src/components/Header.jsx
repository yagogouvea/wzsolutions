import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-lg py-2 shadow-md border-b border-white/10"
          : "bg-black/30 backdrop-blur-md py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center gap-10 px-4 md:px-8">

        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-wzblue">
          WZ Solutions
        </a>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-white text-sm font-semibold ml-10">
          <a href="#servicos" className="px-3 py-1 border-l border-white/10 hover:text-wzblue transition">Serviços</a>
          <a href="#sobre" className="px-3 py-1 border-l border-white/10 hover:text-wzblue transition">Sobre</a>
          <a href="#contato" className="px-3 py-1 border-l border-white/10 hover:text-wzblue transition">Contato</a>
        </nav>

      </div>
    </header>
  );
}
