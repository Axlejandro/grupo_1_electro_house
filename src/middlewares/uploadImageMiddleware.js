const multer = require ('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'public/images/users');
    },
    filename: (req, file, callback) => {
      callback(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        // file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    }
});
  
const uploadImage = multer({ storage: storage});

module.exports = uploadImage;