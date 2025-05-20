import {
    createNotification,
    getAllNotifications,
    updateNotification,
    deleteNotification
} from '../services/NotificationEngagement.service.js'

class NotificationController {

    async createNotification(req, res){
        const {
            beneficiaryId,
            message
        } = req.body;

        if(!beneficiaryId || !message) {
            res.status(400).send({ message: 'Por favor, forneca todos os dados necessários!' })
        };

        const notification = await createNotification(
            beneficiaryId,
            message
        );
        res.status(201).send({ message: 'Notificação criada com sucesso', notification });
    };

    async getAllNotifications(req, res){
        const notifications = await getAllNotifications();
        res.status(200).send({ message: 'Busca por todas as notificações concluidadas!', notifications })
    };

    updateNotification(req, res){
        
    };

    deleteNotification(req, res){

    };
};

export default new NotificationController;