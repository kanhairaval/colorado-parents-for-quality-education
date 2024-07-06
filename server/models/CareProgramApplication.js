const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const CareProgramApplication = sequelize.define('careprogramapplication', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number_of_children: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  commitments: {
    type: DataTypes.JSON, // Store as JSON string
    allowNull: false,
    defaultValue: '[]', // Default value for an empty array
    get() {
      const rawValue = this.getDataValue('commitments');
      return JSON.parse(rawValue || '[]');
    },
    set(value) {
      this.setDataValue('commitments', JSON.stringify(value || []));
    },
  },
});

module.exports = CareProgramApplication;