const express = require ('express');

const path = require('path');
const usersController = require('../controllers/usersController');

const router = express.Router();

const validationsUserRegister = require('../middlewares/validateUserRegisterMiddleware');
const uploadImage = require('../middlewares/uploadImageMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// router.get('/register', usersController.register);
// router.post('/',usersController.storeUser);

// router.get('/usersEdit/:idUser', usersController.edit);
// router.get('/cart', usersController.cart);
router.get('/create', guestMiddleware, usersController.create);
router.post('/create', validationsUserRegister, uploadImage.single('image'), usersController.store);
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.loginProcess);
router.get('/profile', authMiddleware, usersController.profile);
router.get('/logout', usersController.logout);
router.get('/edit/:id', authMiddleware, usersController.edit);
router.put('/edit/:id',uploadImage.single('image'), usersController.update);
router.delete('/delete/:id', authMiddleware, uploadImage.single('image'), usersController.delete);

module.exports = router;