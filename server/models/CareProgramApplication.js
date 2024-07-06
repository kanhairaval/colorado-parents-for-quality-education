const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CareProgramApplication extends Model {}

CareProgramApplication.init(
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
        number_of_children: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0, // Ensures the number is not negative
            },
        },
        commitments: {
            type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings to store commitments
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'careprogramapplication',
    }
);

module.exports = CareProgramApplication;