import express, { Router } from "express";
const router = express.Router();

import user from "./user/routes.js"
import movies from "./movies/routes.js"

router.use("/user", user);
router.use("/movies", movies);

export default router;
