const express = require ('express');

const usersController = require('../controllers/usersController');

const router = express.Router();


router.get('/register', usersController.register);
router.post('/',usersController.storeUser);
router.get('/login', usersController.login);
router.get('/usersEdit/:idUser', usersController.edit);
router.get('/cart', usersController.cart);
router.get("/:id", controller.show);

module.exports = router;