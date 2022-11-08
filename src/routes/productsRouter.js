const express = require ('express');
const multer = require ('multer');
const path = require('path');

const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/images/products');
  },
  filename: (req, file, callback) => {
    callback(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  }
});


const uploadImage = multer({ storage: storage});



router.get('/cart', productsController.cart);
router.get('/create', authMiddleware, productsController.create);
router.post('/create', uploadImage.single('image'), productsController.store);


router.get('/products', productsController.products);
//router.post('/products', productsController.products);
router.get('/video-juegos', productsController.videoJuegos);
router.get('/computadores', productsController.computadores);
router.get('/telefonos', productsController.telefonos);

router.get('/edit/:id', authMiddleware, productsController.edit);
router.put('/edit/:id',uploadImage.single('image'), productsController.update);
router.delete('/delete/:id', authMiddleware, uploadImage.single('image'), productsController.delete);


module.exports = router;