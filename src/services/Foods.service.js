// src/Services/Foods.Services.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createFood = (data, client = prisma) => {
  return client.food.create({ data });
};

const getAllFoods = (client = prisma) => {
  return client.food.findMany();
};

const getFoodById = (id, client = prisma) => {
  return client.food.findUnique({ where: { id } });
};

const updateFood = (id, data, client = prisma) => {
  return client.food.update({
    where: { id },
    data,
  });
};

const deleteFood = (id, client = prisma) => {
  return client.food.delete({
    where: { id },
  });
};

const getFoodByCategory = (category, client = prisma) => {
  return client.food.findMany({
    where: { category },
  });
};

const getFoodByName = (name, client = prisma) => {
  return client.food.findMany({
    where: { name: { contains: name, mode: "insensitive" } },
  });
};

const getFoodByExpirationDate = (date, client = prisma) => {
  return client.food.findMany({
    where: { expirationDate: new Date(date) },
  });
};

export default {
  createFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood,
  getFoodByCategory,
  getFoodByName,
  getFoodByExpirationDate,
};