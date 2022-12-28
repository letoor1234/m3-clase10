const getAllAuthors = (req, res) => res.send("Get users");

const createAuthor = (req, res) => res.send("Create user");

const editAuthor = (req, res) => res.send("Edit user");

const deleteAuthor = (req, res) => res.send("Delete user");

const authorControllers = {
  getAllAuthors,
  createAuthor,
  editAuthor,
  deleteAuthor,
};

module.exports = authorControllers;
