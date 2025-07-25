import express from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', authenticate, getAllProducts);
router.get('/:id', authenticate, getProductById);
router.post('/create', authenticate, createProduct);
router.delete('/:id', authenticate, deleteProduct);

export default router;
