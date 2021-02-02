import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import exphbs from "express-handlebars";
import { HttpStatusCode } from "./utils";

import userRoutes from "./users/users.routes";

const app = express();
dotenv.config();

app.use(helmet());
app.use(json());
app.use(morgan("dev"));

app.engine(
    "hbs",
    exphbs({
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");

app.use("/static", express.static("public"));

app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("*", (req, res) => {
    res.status(HttpStatusCode.NOT_FOUND).render("404");
});

export default app;
