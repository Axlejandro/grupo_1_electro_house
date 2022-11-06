let db =require("../database/models");
const Op=db.Sequelize.Op




const adminController = {

    'list': (req, res) =>{
        db.Product.findAll()
        .then((product)=>{
            res.render('./admin/listProducts',{product})
        })
    },
}


module.exports = adminController;