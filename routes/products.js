const express = require('express');
const router = express.Router();
const productsController = require("../controllers/products")
const jwt = require('../middleware/jwt')



/* GET : Get all products. */
router.get('/', productsController.findAllProducts);

/* GET : Get single product by ID. */
router.get('/:id', productsController.findProductById);

/* POST : Create one product. */
router.post('/', productsController.createProduct);

/* PATCH : Update one product by id. */
router.patch('/:id', productsController.editProduct);

/* DELETE : Delete one product by id. */
router.delete('/:id', productsController.deleteProduct);


module.exports = router;
