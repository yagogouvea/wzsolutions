import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  return (
    <section id="contato" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-wzblue"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Fale Conosco
        </motion.h2>
        <motion.div
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-200 mb-6">
            Pronto para transformar seu projeto em realidade? Fale agora com a nossa equipe no WhatsApp.
          </p>
          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wzblue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            <FaWhatsapp size={24} />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
