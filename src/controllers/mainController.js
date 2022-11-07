let db = require("../database/models");

//const fs=require("fs");
//const path= require("path");
//const productsFilePath = path.join(__dirname, '../../data/productsDataBase.json');


const mainController = {

    loading: (req, res) => res.render('loading'),

    home: async (req, res) => res.render('home', {
        
        categories: await db.Category.findAll()
    
        .then(category => {
            data = JSON.parse(JSON.stringify(category));
            return data;
        }),

    products: await db.Product.findAll()


        .then(products => {
            data = JSON.parse(JSON.stringify(products));
            return data;
        }),
    nombrePagina: 'Home'
})
}



module.exports = mainController











//function getProducts() {
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
// return products;
//}

//onst controller = {
// index: (req, res) =>{
//    const products = getProducts();
//  res.render('home', {products});


//}

//}

module.exports = mainController