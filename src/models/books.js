const { DataTypes } = require("sequelize");
const Author = require("./authors");
const { sequelize } = require("./index");

const Book = sequelize.define("Book", {
  _id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Book.belongsTo(Author, {
  foreignKey: "authorId",
});

module.exports = Book;
