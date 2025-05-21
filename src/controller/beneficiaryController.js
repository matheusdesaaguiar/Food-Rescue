const verifyBeneficiary = async (req, res) => {
  try {
    const { name, registrationNumber } = req.body;

    // Verifica se os campos obrigatórios foram enviados
    if (!name || !registrationNumber) {
      return res.status(400).json({ message: 'Nome e número de registro são obrigatórios.' });
    }

    // Simula uma verificação simples
    const isValid = true;

    if (isValid) {
      res.json({ message: 'Instituição verificada com sucesso.' });
    } else {
      res.status(401).json({ message: 'Instituição inválida.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao verificar instituição', error: error.message });
  }
};

//logica para o criate
const createBeneficiary = async (req, res) => {
  try {
    const { name, email, registrationNumber } = req.body;

    // Validação simples: campos obrigatórios
    if (!name || !email || !registrationNumber) {
      return res.status(400).json({ message: 'Nome, email e número de registro são obrigatórios.' });
    }

    // Simulação de criação (no futuro você salvará no banco)
    const newBeneficiary = {
      id: Date.now(), // gerador simples de ID (só para teste)
      name,
      email,
      registrationNumber,
    };

    res.status(201).json({ message: 'Beneficiário criado com sucesso!', beneficiary: newBeneficiary });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar beneficiário', error: error.message });
  }
};

const updateBeneficiary = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email, registrationNumber } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'ID do beneficiário é obrigatório.' });
    }

    // Simulação de busca e atualização (em um banco, você buscaria pelo ID e atualizaria)
    const updatedBeneficiary = {
      id,
      name: name || 'Nome antigo',
      email: email || 'Email antigo',
      registrationNumber: registrationNumber || 'Registro antigo',
    };

    res.json({ message: 'Beneficiário atualizado com sucesso.', beneficiary: updatedBeneficiary });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar beneficiário', error: error.message });
  }
};

const deleteBeneficiary = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!id) {
      return res.status(400).json({ message: 'ID do beneficiário é obrigatório.' });
    }

    // Simulação: apenas confirma a exclusão
    res.status(204).json({ message: 'Beneficiário deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar beneficiário', error: error.message });
  }
};






export default {
  verifyBeneficiary,
  createBeneficiary,
  updateBeneficiary,
  deleteBeneficiary
};
