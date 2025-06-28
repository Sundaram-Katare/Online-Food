import express from 'express';
import { addCart, getCart, updateCartItem, deleteCartItem } from '../controllers/cartController.js';

import { verifyToken } from '../middlewares/authMiddleware.js';
import { allowRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.use(verifyToken, allowRoles('user'));

router.get('/', getCart);
router.post('/add', addCart);
router.put('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);

export default router;