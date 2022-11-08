let db =require("../database/models");
const Op=db.Sequelize.Op




const productsController = {

    'products': (req, res) =>{
        db.Product.findAll()
        .then((product)=>{
            res.render('./products/products',{product})
        })
    },

    'create': async (req, res)=>{
        
        res.render('./admin/createProduct', {
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
        res.redirect("/admin/listproducts")
    },

    'edit': async(req, res)=>{
        const product= await db.Product.findByPk(req.params.id);
        res.render('./admin/editProduct',{
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
         res.redirect("/admin/listproducts")
    },

    'delete' : async (req, res) => {
        const product= await db.Product.findByPk(req.params.id);
        await db.Product.destroy({where: {id:product.id},force: true})
        await res.redirect("/products/products")
 
    },

    'cart': (req, res) =>{
        res.render('./products/cart');
    },


    //Listado de productos por categoria

    'videoJuegos': (req, res) =>{
        db.Product.findAll({
            where: {categories_id:3}
    })
        
        .then((product)=>{
            res.render('./products/products',{product})
        })
    },

    'computadores': (req, res) =>{
        db.Product.findAll({
            where: {categories_id:1}
    })
        
        .then((product)=>{
            res.render('./products/products',{product})
        })
    },

    'telefonos': (req, res) =>{
        db.Product.findAll({
            where: {categories_id:2}
    })
        
        .then((product)=>{
            res.render('./products/products',{product})
        })
    },
    
}


module.exports = productsController;