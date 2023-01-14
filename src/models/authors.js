const { DataTypes } = require("sequelize");
const Book = require("./books");
const { sequelize } = require("./index");

const Author = sequelize.define("Author", {
  _id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Author.hasMany(Book, {
  onDelete: "CASCADE"
});

module.exports = Author;
