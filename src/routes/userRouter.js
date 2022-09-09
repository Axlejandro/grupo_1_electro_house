const express = require ('express');

const userController = require('../controllers/userController');

const router = express.Router();


router.get('/register', userController.register);
router.post('/register',userController.storeUser);

router.get('/login', userController.login);
router.get('/userEdit/:idUser', userController.edit);

module.exports = router;