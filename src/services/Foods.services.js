import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllFoods = async () => {
  try {
    const foods = await prisma.food.findMany();
    return foods;
  } catch (error) {
    throw new Error("Error fetching foods: " + error.message);
  }
}

export const getAllFoodsByCategory = async (categoryId) => {
  try {
    const foods = await prisma.food.findMany({
      where: {
        categoryId: categoryId
      }
    });
    return foods;
  } catch (error) {
    throw new Error("Error fetching foods by category: " + error.message);
  }
}