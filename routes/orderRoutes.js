import express from 'express';
import { createOrder, getOrderDetail, getOrders } from '../controllers/orderController.js';
import { adminCheck, userCheck } from '../middleware/userCheck.js';
import { notAllowed } from '../utils/notAllowed.js';


const router = express.Router();


router.route('/')
  .post(userCheck, createOrder)
  .all(notAllowed);

router.route('/users').get(userCheck, getOrders).all(notAllowed);
router.route('/:id').get(getOrderDetail).all(notAllowed);

export default router;
