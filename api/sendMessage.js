// api/sendMessage.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método não permitido" });
    }
  
    const {
      nome,
      email,
      whatsapp,
      tipoProjeto,
      outroProjeto,
      resumo,
      possuiMaterial,
      orcamento,
    } = req.body;
  
    if (!nome || !email || !whatsapp || !resumo || !orcamento) {
      return res.status(400).json({ error: "Campos obrigatórios não preenchidos." });
    }
  
    try {
      console.log("🟢 Novo formulário recebido:");
      console.log({
        nome,
        email,
        whatsapp,
        tipoProjeto,
        outroProjeto,
        resumo,
        possuiMaterial,
        orcamento,
      });
  
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("Erro interno:", err);
      return res.status(500).json({ error: "Erro interno no servidor." });
    }
  }
  