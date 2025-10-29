import express from "express";
import {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} from "./movies.js";

const router = express.Router();

router.post("/createMovie", createMovie);
router.get("/getAllMovies", getAllMovies);
router.get("/getMovieById/:id", getMovieById);
router.put("/updateMovie/:id", updateMovie);
router.delete("/deleteMovie/:id", deleteMovie);

export default router;
