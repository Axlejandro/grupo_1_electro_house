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

    'products': (req, res) =>{
        db.Product.findAll()
        .then((product)=>{
            res.render('products.ejs',{product})
        })
    },

    'create': async (req, res)=>{
        
        res.render('createProduct', {
            category: await db.Category.findAll(),
            brand: await db.Brand.findAll()
            
        })
    },

    'store':async (req, res)=>{
       await db.Product.create({
            name: req.body.name ,
            description: req.body.description,
            image: req.file?.filename || 'imagen.png',
            price: req.body.price,
            categories_id:req.body.category,
            brand_id: req.body.brand


        });
        res.redirect("/products/products")
    },

    'edit': async(req, res)=>{
        const product= await db.Product.findByPk(req.params.id);
        res.render('editProduct',{
            product,
            category: await db.Category.findAll(),
            brand: await db.Brand.findAll()
        })
    },

    'update':async (req, res)=>{
        const product= await db.Product.findByPk(req.params.id);
        await product.update({
             name: req.body.name ,
             description: req.body.description,
             image: req.file?.filename || product.image,
             price: req.body.price,
             categories_id:req.body.category,
             brand_id: req.body.brand
 
 
         });
         await product.save()
         res.redirect("/products/products")
     },

    
    
    

    

    
}





module.exports = productsController;