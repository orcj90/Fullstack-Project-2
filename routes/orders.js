const express = require('express');
const router = express.Router();
const ordersController = require("../controllers/orders")



/* GET : Get all orders. */
router.get('/', ordersController.findAllOrders);

/* GET : Get single order by ID. */
router.get('/:id', ordersController.findOrderById);

/* POST : Create one order. */
router.post('/', ordersController.createOrder);

/* PATCH : Update one order by id. */
router.patch('/:id', ordersController.editOrder);

/* DELETE : Delete one order by id. */
router.delete('/:id', ordersController.deleteOrder);


module.exports = router;
