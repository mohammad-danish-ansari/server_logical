import apiRouter from "./routes.js";
import express from "express";
import dotenv from "dotenv";
import sequelize  from "./config/dbSQL.js"
import cors from "cors";
import logger from "morgan";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(logger("dev"));
app.use("/", apiRouter);

// connect port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`API is running on port:http:/localhost:${port}`);
});

