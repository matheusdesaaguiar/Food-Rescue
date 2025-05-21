import router from 'express';
import foodController from '../controller/food.controller.js';

const router = express.Router();

router.post('/foods/create', foodController.createFood);
router.get('/foods/all', foodController.getAllFoods);
router.get('/foods/byid/:id', foodController.getFoodById);
router.put('/foods/update/:id', foodController.updateFood);
router.delete('/foods/delete/:id', foodController.deleteFood);
router.get('/foods/category/:id', foodController.getFoodByCategory);

export default router;