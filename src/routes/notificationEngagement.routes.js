import { Router } from "express";
import notificationController from "../controller/notificationengagement.controller.js";

const notification = Router();

notification.post('/create', notificationController.createNotification);
notification.get('/getall', notificationController.getAllNotifications);
notification.put('/update/:id', notificationController.updateNotification);
notification.delete('/delete/:id', notificationController.deleteNotification);

export default notification;