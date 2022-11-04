module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        
        fullName: {
            type: dataTypes.STRING(256),
            allowNull: false
        },
        userName: {
            type: dataTypes.STRING(256),
            allowNull: false
        },

        email: {
            type: dataTypes.STRING(256),
            allowNull: false
        },

        adress: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        phoneNumber: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        password: {
            type: dataTypes.STRING(128),
            allowNull: false
        },

        birthdayDate: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        image: {
            type: dataTypes.TEXT,
            allowNull: true
        },
       
        
    };
    let config = {
        tableName: 'users',
        timestamps: false,
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsToMany(models.Country, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "countries",
            through: 'user_country',
            foreignKey: 'user_id',
            otherKey: 'country_id',
            timestamps: false
        })
    }

    return User
};