const middleware1 = (req, res, next) => {
  /* const { name } = req.body;

  if (!name) {
    return res.json({
      status: "error",
      message: "name is required",
    });
  } */

  console.log("atraveso el middleware1");

  return next();
};

module.exports = middleware1;
