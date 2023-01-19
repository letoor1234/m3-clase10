const { Router } = require("express");
const {
  getAllGenres,
  createGenre,
  editGenre,
  deleteGenre,
  getCreateForm,
} = require("../controllers/genres");

const router = Router();

router.get("/", getAllGenres);

router.get("/create", getCreateForm);

router.post("/", createGenre);

router.put("/:id", editGenre);

router.delete("/:id", deleteGenre);

module.exports = router;
