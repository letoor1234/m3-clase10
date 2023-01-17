const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Genre = sequelize.define("Genre", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genre;
