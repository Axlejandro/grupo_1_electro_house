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
    
    const Country = sequelize.define(alias, cols, config); 

    Country.associate = function (models) {
        Country.hasMany(models.User, {
            as: "country_users",
            foreignKey: "countries_id"
        })
    }

    

    return Country
};