import React from "react";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-wzblue"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sobre a WZ Solutions
        </motion.h2>
        <motion.div
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md text-gray-200 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed">
            A WZ Solutions é especializada em desenvolvimento web, oferecendo soluções digitais como sites, sistemas personalizados, webapps e automações inteligentes.
            Trabalhamos com foco em agilidade, modernidade e resultados reais para nossos clientes.
          </p>
        </motion.div>
      </div>

      {/* Divisor para Contato */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.84,22,103.47,32.27,158,28.51
            70.22-5,136.07-33.28,206-38.9C438.48,29.34,
            509.16,49.75,579,57.23c69.44,7.39,
            138.65-3.31,207-16.92,63.5-12.5,
            127.87-26.71,192-24.18,57.84,
            2.28,113.84,16.47,170,29.58V0Z"
            opacity="0.2"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
