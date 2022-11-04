module.exports = (sequelize, dataTypes) => {

    
    
    let alias = 'Country';
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
        tableName: 'countries',
        timestamps: false,
        deletedAt: false
    }
    
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsToMany(models.Category, { 
            as: "categories",
            through: 'product_category',
            foreignKey: 'product_id',
            otherKey: 'category_id',
            timestamps: false
        })
    }

    Product.associate = function (models) {
        Product.belongsToMany(models.Brand, { 
            as: "brands",
            through: 'product_brand',
            foreignKey: 'product_id',
            otherKey: 'brand_id',
            timestamps: false
        })
    }

    return Country
};