import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import FormularioModal from "./FormularioModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 text-white relative">
      <div className="text-center px-6 max-w-2xl relative z-10">
        {/* Div para glitch + aura */}
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Aura luminosa */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-40 h-40 bg-wzblue/20 rounded-full blur-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1.2 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            style={{ transform: "translate(-50%, -50%)" }}
          />

          {/* Camada principal */}
          <motion.img
            src={logo}
            alt="Logo WZ Solutions"
            className="w-56 mx-auto mb-6 relative z-10"
            initial={{
              scale: 0.8,
              x: 0,
              y: 0,
              filter: "blur(3px) contrast(120%)",
            }}
            animate={{
              scale: [0.8, 1.05, 0.95, 1],
              x: [0, -3, 3, -2, 2, 0],
              y: [0, 2, -2, 2, -2, 0],
              filter: [
                "blur(3px) contrast(120%)",
                "blur(1px) contrast(130%)",
                "blur(0px) contrast(100%)",
              ],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 1],
            }}
          />

          {/* Camada RGB glitch */}
          <motion.img
            src={logo}
            alt="Logo Glitch RGB"
            className="w-56 mx-auto mb-6 absolute top-0 left-0 opacity-30 mix-blend-screen pointer-events-none"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, 2, -2, 2, -2, 0],
              y: [0, -2, 2, -2, 2, 0],
              filter: [
                "hue-rotate(0deg)",
                "hue-rotate(30deg)",
                "hue-rotate(-30deg)",
                "hue-rotate(0deg)",
              ],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: 0,
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          />
        </motion.div>

        {/* Títulos e botão */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Soluções Digitais Inteligentes
        </motion.h1>

        <motion.p
          className="text-lg text-white/90 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Criação de sites, sistemas personalizados e webapps sob medida.
        </motion.p>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="bg-wzblue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        >
          Solicite um Orçamento
        </motion.button>

        <FormularioModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </section>
  );
}
