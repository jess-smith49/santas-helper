//Requirements
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//Create Category Model
class Category extends Model {}

//Initialize Category
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },

        cateogry_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        /*list_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'list',
                key: 'id'
            }
        }*/
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

//Exporting Category Model
module.exports = Category