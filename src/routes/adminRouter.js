const express = require ('express');
const multer = require ('multer');
const path = require('path');

const adminController = require('../controllers/adminController');

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


router.get('/listproducts', adminController.list);
router.get('/listusers', adminController.listUsers);


module.exports = router;