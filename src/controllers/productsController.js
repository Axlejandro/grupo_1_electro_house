let db =require("../database/models");
const Op=db.Sequelize.Op


//const fs=require("fs");
//const path= require("path");
//const productsFilePath = path.join(__dirname, '../../data/productsDataBase.json');

//function getProducts() {
   // const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
   // return products;
//}

const productsController = {

    'create': (req, res)=>{
        category: db.Category.findAll()
        .then((category)=>{
            res.render('createProduct',{category:category})
        })

        db.Brand.findAll()
        .then((brand)=>{
            return res.render('createProduct',{brand:brand})
        })
    }
    ,
    'products': (req, res) =>{
        db.Product.findAll()
        .then((product)=>{
            res.render('products.ejs',{product})
        })
    },

    

    
}





module.exports = productsController;