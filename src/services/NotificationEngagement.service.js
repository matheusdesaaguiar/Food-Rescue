import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// CREATE (C) - CRIA NOTIFICAÇÃO (POST)
export const createNotification = async(data)=>{
    const create = await prisma.notificationengagement.create({
        data: {
            beneficiaryId: data.beneficiaryId,
            message: data.message,
        }
    });

    return create;
};

// READ (R) - BUSCAR TODAS AS NOTIFICAÇÕES (GET)
export const getAllNotifications = async()=>{
    const notification = await prisma.notificationengagement.findMany();
    return notification;
};

// UPDATE (U) - ATUALIZAR OS DADOS DE UMA NOTIFICAÇÃO (PUT)
export const updateNotification = async(id, data)=>{
    const update = await prisma.notificationengagement.update({
        where: {id},
        data: {
            beneficiaryId: data.beneficiaryId,
            message: data.message,
        }
    });
    return update;
};

// DELETE (D) - DELETA UMA NOTIFICAÇÃO (DELETE)
export const deleteNotification = async(id)=>{
    const deleteN = await prisma.notificationengagement.delete({ where: {id} });

    return deleteN;
}