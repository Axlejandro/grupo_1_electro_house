
const fs=require("fs");
const path= require("path");
const productsFilePath = path.join(__dirname, '../../data/productsDataBase.json');

function getProducts() {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    return products;
}

const controller = {
    index: (req, res) =>{
        const products = getProducts();
        res.render('home', {products});
    
    
    }
    
}
module.exports = controller