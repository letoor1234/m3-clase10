const { DataTypes } = require("sequelize");
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
});

Stock.associate = (models) => {
  Stock.hasOne(models.books, {
    foreignKey: "bookId",
  });
};

module.exports = Stock;
