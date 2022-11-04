let db =require("../database/models");

//const fs=require("fs");
//const path= require("path");
//const productsFilePath = path.join(__dirname, '../../data/productsDataBase.json');


const mainController ={
    index: async(req, res) =>{
        const products =await db.Product.findAll()
        



    }
}


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