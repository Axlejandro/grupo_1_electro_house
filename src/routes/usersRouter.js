const express = require ('express');

const path = require('path');
const usersController = require('../controllers/usersController');

const router = express.Router();

const validationsUserRegister = require('../middlewares/validateUserRegisterMiddleware');
const uploadImage = require('../middlewares/uploadImageMiddleware');



// router.get('/register', usersController.register);
// router.post('/',usersController.storeUser);

// router.get('/usersEdit/:idUser', usersController.edit);
// router.get('/cart', usersController.cart);
router.get('/create', usersController.create);
router.post('/create', validationsUserRegister, uploadImage.single('image'), usersController.store);
router.get('/login', usersController.login);

module.exports = router;