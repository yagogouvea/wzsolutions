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
      // Aqui você pode salvar os dados em um banco de dados, planilha ou outro serviço
      console.log("📩 Novo lead recebido:");
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
  
      // Retornar sucesso
      return res.status(200).json({ success: true, message: "Dados recebidos com sucesso!" });
    } catch (error) {
      console.error("Erro ao processar o lead:", error);
      return res.status(500).json({ error: "Erro interno no servidor." });
    }
  }
  