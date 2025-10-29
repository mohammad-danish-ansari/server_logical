import express from "express";
const app = express();
import {register, login } from "./user.js";

app.post("/register", register);
app.post("/login", login);
export default app;
