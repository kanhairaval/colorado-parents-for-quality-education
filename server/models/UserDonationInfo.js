const { Model, DataTypes } = require("sequelize"); // Extracting the Model & DataTypes methods from the sequelize module to create model with datatypes

const sequelize = require("../config/connection"); // importing to connect model to the database connection

class UserDonationInfo extends Model {} // Inheriting all methods & properties from Model object

// Creating an instance of the Model object called UserDonationInfo
UserDonationInfo.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // Automatically generate UUID
        },
        first_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true, // Ensures the value is a valid email address
            },
        },
        amount: {
            type: DataTypes.FLOAT, // Using FLOAT to store the donation amount
            allowNull: false,
            validate: {
                min: 0, // Ensures the donation amount is not negative
            },
        },
    },
    {
        // Properties for the model configuration
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userdonationinfo',
    }
);

module.exports = UserDonationInfo;