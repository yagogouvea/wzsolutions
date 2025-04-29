import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/10 py-6 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-200 text-sm">
        <p>© {new Date().getFullYear()} WZ Solutions — Todos os direitos reservados.</p>
        <div className="mt-4 space-x-4">
          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-wzblue transition"
          >
            WhatsApp
          </a>
          <a
            href="#"
            className="hover:text-wzblue transition"
          >
            Termos de Uso
          </a>
          <a
            href="#"
            className="hover:text-wzblue transition"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
