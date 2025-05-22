// services/beneficiaryService.js

export const verifyInstitution = ({ name, registrationNumber }) => {
  if (!name || !registrationNumber) {
    throw new Error('Nome e número de registro são obrigatórios.');
  }

  // Aqui você faria uma lógica real de verificação (consultar no banco, etc.)
  return true; // Simulação
};

export const createBeneficiary = ({ name, email, registrationNumber }) => {
  if (!name || !email || !registrationNumber) {
    throw new Error('Nome, email e número de registro são obrigatórios.');
  }

  const newBeneficiary = {
    id: Date.now(),
    name,
    email,
    registrationNumber,
  };

  return newBeneficiary;
};

export const updateBeneficiary = (id, { name, email, registrationNumber }) => {
  if (!id) {
    throw new Error('ID do beneficiário é obrigatório.');
  }

  return {
    id,
    name: name || 'Nome antigo',
    email: email || 'Email antigo',
    registrationNumber: registrationNumber || 'Registro antigo',
  };
};

export const deleteBeneficiary = (id) => {
  if (!id) {
    throw new Error('ID do beneficiário é obrigatório.');
  }

  return true; // Sucesso simulado
};

export const getAllBeneficiaries = () => {
  return [
    { id: 1, name: "João", email: "joao@email.com", registrationNumber: "123" },
    { id: 2, name: "Maria", email: "maria@email.com", registrationNumber: "456" },
  ];
};
