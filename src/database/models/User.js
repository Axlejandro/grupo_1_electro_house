module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
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
        favorite_movie_id: dataTypes.BIGINT(10).UNSIGNED
    };
    let config = {
        tableName: 'actors',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Actor = sequelize.define(alias, cols, config); 

    Actor.associate = function (models) {
        Actor.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "movies",
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }

    return Actor
};