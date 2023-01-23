const { DataTypes } = require("sequelize");
const Book = require("./books");
const { sequelize } = require("./index");

const Stock = sequelize.define("Stock", {
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastInventary: {
    type: DataTypes.STRING,
    allowNull: null,
    defaultValue: Date.now().toString(),
  },
  BookId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Book.hasOne(Stock);
Stock.belongsTo(Book, {
  foreignKey: "BookId",
});

module.exports = Stock;
