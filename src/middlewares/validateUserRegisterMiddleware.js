const path = require('path');
const { body } = require('express-validator');

module.exports = [
	// body('name')
    //     .notEmpty().withMessage('Debe ingresar un nombre').bail()
    //     .isLength({ min: 2}).withMessage('Su nombre debe contener mínimo 2 caracteres'),
    // body('user').notEmpty().withMessage('Debe ingresar un nombre de usuario').bail(),
	// body('email')
	// 	.notEmpty().withMessage('Debes ingresar un correo electrónico').bail()
	// 	.isEmail().withMessage('Debe ingresar un correo electrónico válido'),
    // body('address').notEmpty().withMessage('Debe ingresar una dirección domiciliaria'),
    // body('country').notEmpty().withMessage('Debe seleccionar el país de residencia'),
    // body('tel').notEmpty().withMessage('Debe ingresar un número de teléfono'),
    // body('pass')
    // .notEmpty().withMessage('Debes asignar una contraseña').bail()
    // .isLength({ min: 8}).withMessage('La contraseña debe ser de mínimo 8 caracteres')
    // .custom((value, { req }) => {
    //     const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    //     if (!regex.test(value) ) {
    //         throw new Error('La contraseña debe tener al menos, una letra mayúscula, una minúscula, un número y un carácter especial');
    //     }
    //     console.log(regex.test(value));
    //     return true;
    // }),
	// body('pass_confirm')
    // .custom((value, { req }) => {
    //     if (value !== req.body.pass) {
    //         throw new Error('Las contraseñas no coinciden');
    //     }
    //     return true;
    // }),
    // body('birth_date').notEmpty().withMessage('Debe elegir su fecha de nacimiento'),
    // body('image')
    //     .custom((value, {req}) => {
    //         let file = req.file;
    //         let acceptedExtensions = ['.jpg', '.jpeg', '.png','.gif'];
    //         if(!file) {
    //             throw new Error('Debes cargar una imagen');
    //         }else{
    //             let fileExtension = path.extname(file.originalname);
    //             if(!acceptedExtensions.includes(fileExtension)){
    //                 throw new Error(`Recuerde que las extensiones para imagen de perfil permitidas son (${acceptedExtensions.join(', ')})`)
    //             }
    //         }
    //         return true;
    //     })
]