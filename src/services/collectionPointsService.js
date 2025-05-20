// src/services/collectionPointService.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAll = async () => {
  return await prisma.collectionPoint.findMany();
};

const create = async (data) => {
  return await prisma.collectionPoint.create({ data });
};

const update = async (id, data) => {
  return await prisma.collectionPoint.update({
    where: { id },
    data,
  });
};

const remove = async (id) => {
  return await prisma.collectionPoint.delete({ where: { id } });
};

export default {
  getAll,
  create,
  update,
  remove,
};
