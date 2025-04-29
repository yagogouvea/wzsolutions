// FormularioModal.jsx
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function FormularioModal({ isOpen, setIsOpen }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipoProjeto: "",
    outroProjeto: "",
    resumo: "",
    possuiMaterial: "nao",
    arquivo: null,
    orcamento: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleMaskedPhone = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    const masked = raw
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
      .slice(0, 15);
    setForm((prev) => ({ ...prev, whatsapp: masked }));
    setErrors((prev) => ({ ...prev, whatsapp: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!form.email.trim() || !form.email.includes("@"))
      newErrors.email = "E-mail válido é obrigatório.";
    if (!form.whatsapp.trim()) newErrors.whatsapp = "WhatsApp é obrigatório.";
    if (!form.tipoProjeto) newErrors.tipoProjeto = "Selecione o tipo de projeto.";
    if (form.tipoProjeto === "Outro" && !form.outroProjeto.trim())
      newErrors.outroProjeto = "Descreva o tipo de projeto.";
    if (!form.resumo.trim()) newErrors.resumo = "Resumo do projeto é obrigatório.";
    if (!form.orcamento) newErrors.orcamento = "Informe o orçamento disponível.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);

    try {
      // Salva os dados no backend
      await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const nomeEncoded = encodeURIComponent(form.nome);
      const resumoEncoded = encodeURIComponent(form.resumo);

      const url = `https://wa.me/SEUNUMERO?text=Olá! Meu nome é ${nomeEncoded} e gostaria de falar sobre meu projeto. Detalhes: ${resumoEncoded}`;
      window.location.href = url;
    } catch (err) {
      alert("Erro de conexão. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="relative bg-white text-black p-6 rounded-lg max-w-lg w-full z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-black text-xl hover:text-red-600"
            >
              ×
            </button>

            <Dialog.Title className="text-xl font-bold mb-4">
              Solicite um Orçamento
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome completo" className="w-full p-2 rounded bg-gray-100" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="E-mail" className="w-full p-2 rounded bg-gray-100" />
              <input name="whatsapp" value={form.whatsapp} onChange={handleMaskedPhone} placeholder="WhatsApp com DDD" className="w-full p-2 rounded bg-gray-100" />
              <select name="tipoProjeto" value={form.tipoProjeto} onChange={handleChange} className="w-full p-2 rounded bg-gray-100">
                <option value="">Selecione o tipo de projeto</option>
                <option value="Site">Site</option>
                <option value="Sistema">Sistema</option>
                <option value="Web App">Web App</option>
                <option value="Outro">Outro</option>
              </select>
              {form.tipoProjeto === "Outro" && (
                <input name="outroProjeto" value={form.outroProjeto} onChange={handleChange} placeholder="Descreva o tipo de projeto" className="w-full p-2 rounded bg-gray-100" />
              )}
              <textarea name="resumo" value={form.resumo} onChange={handleChange} placeholder="Resumo do projeto" className="w-full p-2 rounded bg-gray-100" rows={3} />
              <select name="orcamento" value={form.orcamento} onChange={handleChange} className="w-full p-2 rounded bg-gray-100">
                <option value="">Orçamento disponível</option>
                <option value="Até R$1.500">Até R$1.500</option>
                <option value="R$1.500 a R$3.000">R$1.500 a R$3.000</option>
                <option value="R$3.000 a R$5.000">R$3.000 a R$5.000</option>
                <option value="Acima de R$5.000">Acima de R$5.000</option>
              </select>
              <button type="submit" disabled={isSending} className="bg-wzblue text-white w-full py-2 rounded hover:bg-blue-700 transition">
                {isSending ? "Enviando..." : "Enviar e Iniciar Atendimento"}
              </button>
            </form>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
