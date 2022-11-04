let db = require("../database/models");

const controller = {
    login: (req, res) =>{
        res.render('login');        
    
    },

    register: (req, res) =>{
        res.render('register');
    },
    cart: (req, res) =>{
        res.render('cart');
    },

    storeUser: (req, res) => {
        //TODO: aca falta implementar la logica para almacenar el usuario//
        res.redirect('/');
    },
    edit: function(req, res){
        let idUser = req.params.idUSer
        let userToEdit = userDataBase[idUser];
        res.render('/userEdit', userToEdit)
    },
    // TODO: crear metodo para hacer el proceso de login//
}
module.exports = controller