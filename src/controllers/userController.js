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
    storeUser: (req, res) =>{
    //TODO: aca falta implementar la logica para almacenar el usuario//
        res.redirect('/');
    }  
    // TODO: crear metodo para hacer el proceso de login//
}

module.exports = controller