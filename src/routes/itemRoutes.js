import express from 'express';
import { getItems, addItem, updateItem, deleteItem } from '../controllers/itemController.js';

import { verifyToken } from '../middlewares/authMiddleware.js';
import { allowRoles } from '../middlewares/roleMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.get('/', getItems);

router.post('/', verifyToken, allowRoles('admin'), upload.single('image'), addItem);
router.put('/:id', verifyToken, allowRoles('admin'), upload.single('image'), updateItem);
router.delete('/:id', verifyToken, allowRoles('admin'), deleteItem);

export default router;