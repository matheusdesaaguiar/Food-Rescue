import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllFoods = async (req, res) => {
    try {
        const foods = await prisma.food.findMany();
        res.json(foods);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

export const getFoodById = async (req, res) => {
    try {
        const food = await prisma.food.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.json(food);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createFood = async (req, res) => {
    try {
        const { name, category, expirationDate } = req.body;
        const food = await prisma.food.create({
            data: {
                name,
                category,
                expirationDate: new Date(expirationDate),
            },
        });
        res.status(201).json(food);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateFood = async (req, res) => {
    try {
        const { name, category, expirationDate } = req.body;
        const food = await prisma.food.update({
            where: { id: Number(req.params.id) },
            data: {
                name,
                category,
                expirationDate: new Date(expirationDate),
            },
        });
        res.json(food);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteFood = async (req, res) => {
    try {
        await prisma.food.delete({
            where: { id: Number(req.params.id) },
        });
        res.status(204).json({ message: "Food deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getFoodByCategory = async (req, res) => {
    try {
        const food = await prisma.food.findMany({
            where: { category: req.params.category },
        });
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.json(food);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}