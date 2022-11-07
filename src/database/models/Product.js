module.exports = (sequelize, dataTypes) => {

    
    
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
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
        deletedAt:false
        
    }
    
    const Product = sequelize.define(alias, cols, config); 


    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: "products_category",
            foreignKey: "categories_id"
        })
    }

        Product.associate = function (models) {
            Product.belongsTo(models.Brand, {
                as: "products_brand",
                foreignKey: "brand_id"
            })
        }

    

    return Product
};