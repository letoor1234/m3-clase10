const { DataTypes } = require("sequelize");
const Genre = require("./genre");
const Author = require("./authors");
const { sequelize } = require("./index");

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearOfPublication: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AuthorId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GenreId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Author.hasMany(Book);
Book.belongsTo(Author, {
  foreingKey: "AuthorId",
});

Genre.hasMany(Book);
Book.belongsTo(Genre, {
  foreingKey: "GenreId",
});

module.exports = Book;
