// router/productRouter.ts
import express from 'express';
import { ProductActor } from '../actor/ProductActor/ProductActor';

export const productRouter = express.Router();

productRouter.post('/create_product', ProductActor.createProduct);
productRouter.post('/search', ProductActor.searchProducts);