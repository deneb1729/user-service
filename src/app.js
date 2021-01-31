import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import exphbs from "express-handlebars";
import { HttpStatusCode } from "./utils";

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

app.get("/", (req, res) => {
    res.render("home");
});

app.get("*", (req, res) => {
    res.status(HttpStatusCode.OK).send("Welcome to the our API Rest");
});

export default app;
