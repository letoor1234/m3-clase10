const Genre = require("../models/genre");

const getAllGenres = async (req, res) => {
  const genres = await Genre.findAll();

  return res.render("genresList.ejs", { genres });
};

const getCreateForm = (req, res) => res.render("createGenre.ejs");

const createGenre = async (req, res) => {
  const { name } = req.body;

  await Genre.create({ name });

  return res.redirect("/genres");
};

const editGenre = (req, res) => res.send("Edit genre");

const deleteGenre = (req, res) => res.send("Delete genre");

const genreControllers = {
  getAllGenres,
  getCreateForm,
  createGenre,
  editGenre,
  deleteGenre,
};

module.exports = genreControllers;
