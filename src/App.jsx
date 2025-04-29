import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const vantaRef = useRef(null);

  useEffect(() => {
    // ⏳ Tempo fixo para o Loader (sem depender do Vanta)
    const timer = setTimeout(() => {
      setIsLoading(false); // Termina o loader depois de 1.5s
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && !vantaEffect && window.VANTA) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x086bff,
        backgroundColor: 0x000000,
        points: 20,
        maxDistance: 18,
        spacing: 14,
        showDots: true,
        opacity: 0.8,
        waveSpeed: 0.3,
        spacingVariance: 1.5,
      });
      setVantaEffect(effect);
    }

    // Cleanup
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isLoading, vantaEffect]);

  return (
    <div ref={vantaRef} className="min-h-screen w-full overflow-hidden text-white relative">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative z-10 backdrop-blur-sm">
          <Header />
          <Hero />
          <Servicos />
          <Sobre />
          <Contato />
          <Footer />
        </div>
      )}
    </div>
  );
}
