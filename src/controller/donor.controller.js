import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 🆕 Criar novo doador
export const createDonor = async (req, res) => {
  try {
    const { nome, email, telefone, endereco, cnpj } = req.body;

    const newDonor = await prisma.donor.create({
      data: { nome, email, telefone, endereco, cnpj },
    });

    res.status(201).json(newDonor);
  } catch (error) {
    console.error("Erro ao criar doador:", error);
    res.status(500).json({ message: "Erro ao criar doador", error: error.message });
  }
};

// ✅ Listar todos os doadores
export const getAllDonors = async (req, res) => {
  try {
    const allDonors = await prisma.donor.findMany();
    res.status(200).json(allDonors);
  } catch (error) {
    console.error("Erro ao listar doadores:", error);
    res.status(500).json({ message: "Erro ao listar doadores", error: error.message });
  }
};

// 🔎 Buscar doador por ID
export const getDonorById = async (req, res) => {
  const { id } = req.params;

  try {
    const donor = await prisma.donor.findUnique({
      where: { id: parseInt(id) },
    });

    if (!donor) {
      return res.status(404).json({ message: "Doador não encontrado" });
    }

    res.status(200).json(donor);
  } catch (error) {
    console.error("Erro ao buscar doador por ID:", error);
    res.status(500).json({ message: "Erro ao buscar doador", error: error.message });
  }
};

// 🔄 Atualizar doador por ID
export const updateDonor = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, endereco, cnpj } = req.body;

  try {
    const updatedDonor = await prisma.donor.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        email,
        telefone,
        endereco,
        cnpj,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(updatedDonor);
  } catch (error) {
    console.error("Erro ao atualizar doador:", error);
    res.status(500).json({ message: "Erro ao atualizar doador", error: error.message });
  }
};

// ❌ Deletar doador por ID
export const deleteDonor = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.donor.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar doador:", error);
    res.status(500).json({ message: "Erro ao deletar doador", error: error.message });
  }
};