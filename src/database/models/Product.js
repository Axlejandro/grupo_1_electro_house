module.exports = (sequelize, dataTypes) => {

    
    
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        
        name: {
            type: dataTypes.STRING(256),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        image: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        price: {
            type: dataTypes.DECIMAL(11,2),
            allowNull: false
        },

        
        
    };
    let config = {
        tableName: 'products',
        timestamps: false,
        
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

    return Product
};