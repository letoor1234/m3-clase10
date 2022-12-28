require("dotenv").config();

const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { testDb } = require("./models");

const express = require("express");

const app = express();

testDb();

/** APPLY GLOBAL MIDDLEWARES */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    cookie: {
      maxAge: 1000 * 3600 * 24,
    },
  })
);
app.use(cookieParser());
/** END APPLY GLOBAL MIDDLEWARES */

/** CREATING ROUTES */

const authorRouter = require("./routes/authors");
app.use("/authors", authorRouter);

/** END CREATING ROUTES */

// GET START THE SERVER
app.listen(process.env.PORT, () => console.log("Servidor funcionando!!"));
