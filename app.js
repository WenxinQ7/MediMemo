import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
// commented out based on class video, but can use for login stuff?
// import usersRouter from "./routes/users.js";

// Copiolet generated code from class
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// /copiolet generated
let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// commented out based on class video,but can use for login stuff?
// app.use("/users", usersRouter);

export default app;
