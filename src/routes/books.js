const { Router } = require("express");
const {
  getAllBooks,
  createBook,
  editBook,
  deleteBook,
  getCreateForm,
} = require("../controllers/books");

const router = Router();

router.get("/", getAllBooks);

router.get("/create", getCreateForm);

router.post("/", createBook);

router.put("/:id", editBook);

router.delete("/:id", deleteBook);

module.exports = router;
