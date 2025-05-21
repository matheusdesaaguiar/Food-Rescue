import express from 'express';
import beneficiaryController from '../controllers/beneficiaryController.js';

const router = express.Router();

router.post('/verify', beneficiaryController.verifyBeneficiary);
router.post('/', beneficiaryController.createBeneficiary);
router.put(`/:id`, beneficiaryController.updateBeneficiary);
router.delete(`/:id`,beneficiaryController.deleteBneficiary);

export default router;

