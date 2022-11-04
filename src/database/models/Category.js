module.exports = (sequelize, dataTypes) => {

    
    
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        
        name: {
            type: dataTypes.STRING(128),
            allowNull: false
        },
       
        
        
    };
    let config = {
        tableName: 'categories',
        timestamps: false,
        deletedAt: false
    }
    
    const Product = sequelize.define(alias, cols, config); 


    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "category_products",
            foreignKey: "categories_id"
        })
    }
    
    return Category
};