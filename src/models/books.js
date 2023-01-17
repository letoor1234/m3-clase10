const { DataTypes } = require("sequelize");
const Genre = require("./genre");
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
});

Book.associate = (models) => {
  Book.hasOne(models.authors, {
    foreignKey: "authorId",
  });
  Book.hasMany(Genre, {
    foreignKey: "genreIds",
  });
};

module.exports = Book;
