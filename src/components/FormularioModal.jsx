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
    orcamento: ""
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
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
    if (!form.email.trim() || !form.email.includes("@")) newErrors.email = "E-mail válido é obrigatório.";
    if (!form.whatsapp.trim()) newErrors.whatsapp = "WhatsApp é obrigatório.";
    if (!form.tipoProjeto) newErrors.tipoProjeto = "Selecione o tipo de projeto.";
    if (form.tipoProjeto === "Outro" && !form.outroProjeto.trim()) newErrors.outroProjeto = "Descreva o tipo de projeto.";
    if (!form.resumo.trim()) newErrors.resumo = "Resumo do projeto é obrigatório.";
    if (!form.orcamento) newErrors.orcamento = "Informe o orçamento disponível.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const gerarMensagem = () => {
    let msg = `Olá! Gostaria de solicitar um orçamento.\n`;
    msg += `*Nome:* ${form.nome}\n`;
    msg += `*Email:* ${form.email}\n`;
    msg += `*WhatsApp:* ${form.whatsapp}\n`;
    msg += `*Tipo de Projeto:* ${form.tipoProjeto}`;
    if (form.tipoProjeto === "Outro") msg += ` (${form.outroProjeto})`;
    msg += `\n*Resumo:* ${form.resumo}\n`;
    msg += `*Possui material pronto?* ${form.possuiMaterial}\n`;
    msg += `*Orçamento disponível:* ${form.orcamento}`;
    return encodeURIComponent(msg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSending(true);
    setTimeout(() => {
      const numeroWhatsApp = "5599999999999"; // substitua pelo seu número com DDD
      const url = `https://wa.me/${numeroWhatsApp}?text=${gerarMensagem()}`;
      window.open(url, "_blank");
      setIsSending(false);
      setIsOpen(false);
    }, 1200);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" onClose={() => setIsOpen(false)}>
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
            {/* Botão de fechar */}
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-3 text-black text-xl hover:text-red-600">×</button>

            <Dialog.Title className="text-xl font-bold mb-4">Solicite um Orçamento</Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input name="nome" type="text" placeholder="Nome completo" className="w-full p-2 rounded bg-gray-100" onChange={handleChange} />
                {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
              </div>
              <div>
                <input name="email" type="email" placeholder="E-mail" className="w-full p-2 rounded bg-gray-100" onChange={handleChange} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  name="whatsapp"
                  placeholder="WhatsApp com DDD"
                  value={form.whatsapp}
                  onChange={handleMaskedPhone}
                  className="w-full p-2 rounded bg-gray-100"
                />
                {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
              </div>
              <div>
                <select name="tipoProjeto" className="w-full p-2 rounded bg-gray-100" onChange={handleChange}>
                  <option value="">Selecione o tipo de projeto</option>
                  <option value="Site">Site</option>
                  <option value="Sistema">Sistema</option>
                  <option value="Web App">Web App</option>
                  <option value="Outro">Outro</option>
                </select>
                {errors.tipoProjeto && <p className="text-red-500 text-sm mt-1">{errors.tipoProjeto}</p>}
              </div>
              {form.tipoProjeto === "Outro" && (
                <div>
                  <input name="outroProjeto" type="text" placeholder="Descreva o tipo de projeto" className="w-full p-2 rounded bg-gray-100" onChange={handleChange} />
                  {errors.outroProjeto && <p className="text-red-500 text-sm mt-1">{errors.outroProjeto}</p>}
                </div>
              )}
              <div>
                <textarea name="resumo" placeholder="Resumo do projeto" rows={3} className="w-full p-2 rounded bg-gray-100" onChange={handleChange} />
                {errors.resumo && <p className="text-red-500 text-sm mt-1">{errors.resumo}</p>}
              </div>
              <div>
                <p className="mb-1">Já possui material pronto?</p>
                <label className="mr-4">
                  <input type="radio" name="possuiMaterial" value="sim" onChange={handleChange} /> Sim
                </label>
                <label>
                  <input type="radio" name="possuiMaterial" value="nao" defaultChecked onChange={handleChange} /> Não
                </label>
              </div>
              {form.possuiMaterial === "sim" && (
                <input name="arquivo" type="file" accept="image/*,.pdf,.docx" className="w-full p-2 rounded bg-gray-100" onChange={handleChange} />
              )}
              <div>
                <select name="orcamento" className="w-full p-2 rounded bg-gray-100" onChange={handleChange}>
                  <option value="">Orçamento disponível</option>
                  <option value="Até R$1.500">Até R$1.500</option>
                  <option value="R$1.500 a R$3.000">R$1.500 a R$3.000</option>
                  <option value="R$3.000 a R$5.000">R$3.000 a R$5.000</option>
                  <option value="Acima de R$5.000">Acima de R$5.000</option>
                </select>
                {errors.orcamento && <p className="text-red-500 text-sm mt-1">{errors.orcamento}</p>}
              </div>
              <button type="submit" className="bg-wzblue text-white w-full py-2 rounded hover:bg-blue-700 transition" disabled={isSending}>
                {isSending ? "Enviando..." : "Enviar e Iniciar Atendimento"}
              </button>
            </form>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
