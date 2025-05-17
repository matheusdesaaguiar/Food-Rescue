import express from 'express';
import impactController from '../controller/impactController.js';
//depois preciso conectar no server js para pegar as rotas corretamente 
const router = express.Router();

router.post('/reports', impactController.createReport);
router.get('/reports/:id', impactController.getReportById);
router.put('/reports/:id', impactController.updateReport);
router.delete('/reports/:id', impactController.deleteReport);
router.get('/global', impactController.getGlobalImpact);
router.post('/calculate', impactController.calculateEquivalence);

export default router;
