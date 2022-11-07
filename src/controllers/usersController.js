let db = require("../database/models");

const controller = {
    login: (req, res) =>{
        res.render('./users/login');        
    
    },

    register: (req, res) =>{
        res.render('./users/register');
    },
    cart: (req, res) =>{
        res.render('./products/cart');
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
module.exports = {
    list: (req, res) => {
        db.User 
        .findAll()
        .then(users => {
            return res.status(200).json({
                total: users.length,
                data: users,
                status: 200


            })
        })
    },
    
    show: (req, res) => {
        db.User 
        .findByPk(req.params.id)
        .then(user => {
            return res.status(200).json({
                data: user,
                status: 200
            })
        })
    }
}