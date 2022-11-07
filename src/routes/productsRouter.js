const express = require ('express');
const multer = require ('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

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



router.get('/create', productsController.create);
router.post('/create', uploadImage.single('image'), productsController.store);


router.get('/products', productsController.products);
//router.post('/products', productsController.products)

router.get('/edit/:id',productsController.edit);
router.put('/edit/:id',uploadImage.single('image'), productsController.update);
router.delete('/delete/:id',uploadImage.single('image'), productsController.delete);


module.exports = router;