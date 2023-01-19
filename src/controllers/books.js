const Author = require("../models/authors");
const Book = require("../models/books");
const Genre = require("../models/genre");

const getAllBooks = async (req, res) => {
  const books = await Book.findAll();

  return res.render("booksList.ejs", { books });
};

const getCreateForm = async (req, res) => {
  const genres = await Genre.findAll();
  const authors = await Author.findAll();

  res.render("createBook.ejs", { genres, authors });
};

const createBook = async (req, res) => {
  const { title, description, yearOfPublication, authorId, genreIds } =
    req.body;

  await Book.create({
    title,
    description,
    yearOfPublication,
    authorId,
    genreIds,
  });

  return res.redirect("/books");
};

const editBook = (req, res) => res.send("Edit Book");

const deleteBook = (req, res) => res.send("Delete Book");

const BookControllers = {
  getAllBooks,
  getCreateForm,
  createBook,
  editBook,
  deleteBook,
};

module.exports = BookControllers;
