const Author = require("../models/authors");

const getAllAuthors = async (req, res) => {
  const authors = await Author.findAll();

  return res.render("authorsList.ejs", { authors });
};

const getCreateForm = (req, res) => res.render("createAuthor.ejs");

const createAuthor = async (req, res) => {
  const { name, lastName, dateOfBirth, dateOfDeath } = req.body;

  await Author.create({ name, lastName, dateOfBirth, dateOfDeath });

  return res.redirect("/authors");
};

const editAuthor = (req, res) => res.send("Edit user");

const deleteAuthor = (req, res) => res.send("Delete user");

const authorControllers = {
  getAllAuthors,
  getCreateForm,
  createAuthor,
  editAuthor,
  deleteAuthor,
};

module.exports = authorControllers;
