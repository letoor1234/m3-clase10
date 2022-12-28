const { Router } = require("express");
const {
  getAllAuthors,
  createAuthor,
  editAuthor,
  deleteAuthor,
  getCreateForm,
} = require("../controllers/authors");

const router = Router();

router.get("/", getAllAuthors);

router.get("/create", getCreateForm);

router.post("/", createAuthor);

router.put("/:id", editAuthor);

router.delete("/:id", deleteAuthor);

module.exports = router;
