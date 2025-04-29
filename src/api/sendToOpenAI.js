// /api/sendToOpenAI.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });
  
    const { resumo } = req.body;
  
    if (!resumo) return res.status(400).json({ error: 'Resumo é obrigatório.' });
  
    try {
      // Aqui futuramente entrará sua chamada à OpenAI
      // Exemplo simulado:
      const respostaSimulada = `Obrigado por compartilhar: "${resumo}". Em breve retornaremos com um orçamento personalizado.`;
  
      return res.status(200).json({ resposta: respostaSimulada });
    } catch (error) {
      console.error("Erro ao comunicar com OpenAI:", error);
      return res.status(500).json({ error: 'Erro interno na IA' });
    }
  }
  