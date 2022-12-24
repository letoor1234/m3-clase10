require("dotenv").config();

const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const express = require("express");
const middleware1 = require("./middleware/middleware1");

const app = express();

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
/* app.get("/", (req, res) => console.log("Si pasa por el bodyParser"));

app.get("/products", (req, res) => console.log("Si pasa por el bodyParser"));

app.get("/user", (req, res) => console.log("Si pasa por el bodyParser"));

app.get("/user/:id", (req, res) => console.log("Si pasa por el bodyParser"));

app.post("/user/profile", (req, res) =>
  console.log("Si pasa por el bodyParser")
); */

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

/** END CREATING ROUTES */

// GET START THE SERVER
app.listen(process.env.PORT, () => console.log("Servidor funcionando!!"));
