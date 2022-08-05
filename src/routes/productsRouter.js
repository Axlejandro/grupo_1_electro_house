const express = require ('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/products', productsController.products);

router.post('/products', productsController.store)


module.exports = router;