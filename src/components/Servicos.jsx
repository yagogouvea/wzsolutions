import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCogs, FaRobot, FaPlug, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={32} />,
    title: "Criação de Sites Profissionais",
    description: "Desenvolvemos sites modernos, responsivos e de alta performance para empresas, lojas virtuais, landing pages e portais.",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "Desenvolvimento de WebApps",
    description: "Criamos aplicações web completas, seguras e escaláveis, com foco em experiência do usuário e alta performance.",
  },
  {
    icon: <FaCogs size={32} />,
    title: "Sistemas Sob Medida",
    description: "Soluções personalizadas para automação de processos, controle de dados e gestão empresarial inteligente.",
  },
  {
    icon: <FaRobot size={32} />,
    title: "Soluções com Inteligência Artificial",
    description: "Implementamos IA para automações, chatbots, análises preditivas e aumento da eficiência operacional.",
  },
  {
    icon: <FaPlug size={32} />,
    title: "Integrações e Conectividade",
    description: "Integramos APIs de ERPs, CRMs, sistemas de pagamento e plataformas digitais para automação completa.",
  },
  {
    icon: <FaRocket size={32} />,
    title: "Landing Pages Estratégicas",
    description: "Criamos landing pages otimizadas para campanhas de marketing, geração de leads e vendas online.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition border border-white/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="text-wzblue mb-4 p-3 rounded-full bg-blue-100/20 w-fit mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
