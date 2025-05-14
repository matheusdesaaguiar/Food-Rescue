import impactService from '../services/impactService.js';//precisa criar ainda

//falta implementar a lógica de cada função, mas a estrutura está pronta das rotas
const createReport = async (req, res) => {
  try {
    const report = await impactService.createReport(req.body);//preciso criar o service 
    res.status(201).json({message: 'Relatório criado com sucesso', report});
  } catch (error) {
    res.status(500).json({message: 'Erro ao criar o relatório', error: error.message});
  }//mensagem personalizadas, gera um feedback imediato sobre o que o usuário está fazendo
};

const getReportById = async (req, res) => {
  try {
    const report = await impactService.getReportById(Number(req.params.id));
    res.json(report);//vai procurar diretamente pelo ID, se encontrar retorna
  } catch (error) {
    res.status(500).json({message: 'Erro ao buscar o relatório', error: error.message});// não retorna que não há, apenas um erro, evita expor o sistema a ataques
  }
};

const updateReport = async (req, res) => {
  try {
    const report = await impactService.updateReport(Number(req.params.id), req.body);
    res.json(report);
  } catch (error) {
    res.status(500).json({message: 'Erro ao atualizar o relatório', error: error.message});
  }
};

const deleteReport = async (req, res) => {
  try {
    await impactService.deleteReport(Number(req.params.id));
    res.status(204).json({message: 'Relatório deletado com sucesso'});//como não retorna conteúdo é necessário uma mensagem para o usuário saber que deu certo
    //talvez necessite um end(); testarei para ver se precisa ou não
  } catch (error) {
    res.status(500).json({message: 'Erro ao deletar o relatório', error: error.message});
  }
};

const getGlobalImpact = async (req, res) => {};
const calculateEquivalence = async (req, res) => {};

export default {
  createReport,
  getReportById,
  updateReport,
  deleteReport,
  getGlobalImpact,
  calculateEquivalence,
};