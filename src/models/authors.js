const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Author = sequelize.define("Author", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: Date.now().toString()
  },
  dateOfDeath: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: Date.now().toString()
  },
});

module.exports = Author;
