let db =require("../database/models");
const Op=db.Sequelize.Op




const adminController = {

    'list': (req, res) =>{
        db.Product.findAll()
        .then((product)=>{
            res.render('./admin/listProducts',{product})
        })
    },

    'listUsers': (req, res) =>{
        db.User.findAll()
        .then((user)=>{
            res.render('./admin/listUsers',{user})
        })
    }
}


module.exports = adminController;