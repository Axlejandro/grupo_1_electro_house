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

    Brand.associate = function (models) {
        Brands.hasMany(models.Product, {
            as: "brands",
            foreignKey: "brand_id"
        })
    }



    return Brand
};