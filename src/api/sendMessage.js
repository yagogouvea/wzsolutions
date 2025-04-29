export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método não permitido' });
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
  
    // Validação básica
    if (!nome || !email || !whatsapp || !resumo || !orcamento) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
    }
  
    try {
      // Aqui você pode enviar para um banco de dados, planilha, API externa ou e-mail
      console.log("📥 Novo formulário recebido:");
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
  
      return res.status(200).json({ message: 'Dados recebidos com sucesso.' });
    } catch (error) {
      console.error('Erro ao processar dados:', error);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  }
  