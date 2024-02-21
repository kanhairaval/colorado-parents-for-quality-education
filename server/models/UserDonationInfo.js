const { Model, DataTypes } = require("sequelize"); // Extracting the Model & DataTypes methods from the sequelize module to create model with datatypes

const sequelize = require("../config/connection"); // importing to connect model to the database connection

class UserDonationInfo extends Model {} // Inheriting all methods & properties from Model object

// Creating a instance of the Model object called UserDonationInfo
UserDonationInfo.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        middle_name: {
            type: DataTypes.STRING(20),
        },
        last_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        // Properties for the model configuration
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userinfo',
    }
);

module.exports = UserDonationInfo;