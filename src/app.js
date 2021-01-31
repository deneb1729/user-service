import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import { HttpStatusCode } from "./utils";

const app = express();
dotenv.config();

app.use(helmet());
app.use(json());
app.use(morgan("dev"));

app.get("*", (req, res) => {
    res.status(HttpStatusCode.OK).send("Welcome to the our API Rest");
});

export default app;
