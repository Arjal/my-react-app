import express from 'express';
import { addProduct, getProduct, getProducts, removeProduct, updateProduct, getTop5 } from '../controllers/productController.js';
import { notAllowed } from '../utils/notAllowed.js';
import { fileCheck, updatefileCheck } from '../middleware/checkFile.js';
import { checkId } from '../middleware/checkId.js';

import { productValSchema, validates } from '../utils/validator.js';
import { adminCheck, userCheck } from '../middleware/userCheck.js';


const router = express.Router();



router.route('/').get(getProducts)
  .post(userCheck, adminCheck, validates.body(productValSchema), fileCheck, addProduct).all(notAllowed);

router.route('/top-5').get(getTop5, getProducts).all(notAllowed);

router.route('/:id').get(checkId, getProduct).patch(userCheck, adminCheck, checkId, updatefileCheck, updateProduct).delete(userCheck, adminCheck, checkId, removeProduct).all(notAllowed);

export default router;