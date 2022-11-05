const express = require ('express');

const productsController = require('../controllers/productsController');

const router = express.Router();




router.get('/create', productsController.create)

router.get('/products', productsController.products);

router.post('/products', productsController.products)


module.exports = router;