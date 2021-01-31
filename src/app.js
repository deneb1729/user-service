import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());
app.use(morgan("dev"));

export default app;
