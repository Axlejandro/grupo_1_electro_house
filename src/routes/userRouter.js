const express = require ('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/cart', userController.cart);
router.post('/',userController.storeUser);
module.exports = router;