// controllers/beneficiaryController.js

const verifyBeneficiary = async (req, res) => {
  try {
    const { name, registrationNumber } = req.body;

    if (!name || !registrationNumber) {
      return res.status(400).json({ message: 'Nome e número de registro são obrigatórios.' });
    }

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

const createBeneficiary = async (req, res) => {
  try {
    const { name, email, registrationNumber } = req.body;

    if (!name || !email || !registrationNumber) {
      return res.status(400).json({ message: 'Nome, email e número de registro são obrigatórios.' });
    }

    const newBeneficiary = {
      id: Date.now(),
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

    res.status(204).send(); // 204 não retorna body
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar beneficiário', error: error.message });
  }
};

const getAllBeneficiaries = async (req, res) => {
  try {
    // Simulação de lista de beneficiários
    const beneficiaries = [
      { id: 1, name: "João", email: "joao@email.com", registrationNumber: "123" },
      { id: 2, name: "Maria", email: "maria@email.com", registrationNumber: "456" },
    ];

    res.json({ beneficiaries });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar beneficiários', error: error.message });
  }
};

export default {
  verifyBeneficiary,
  createBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
  getAllBeneficiaries
};
