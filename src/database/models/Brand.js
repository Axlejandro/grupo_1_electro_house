module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        
    };

    let config = {
        tableName: 'brands',
        timestamps: false,
        deletedAt: false
    }
    const brands = sequelize.define(alias, cols, config); 

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
        Product.belongsToMany(models.Brands, { 
            as: "brands",
            through: 'product_brand',
            foreignKey: 'product_id',
            otherKey: 'brand_id',
            timestamps: false
        })
    }

    return Brand
};