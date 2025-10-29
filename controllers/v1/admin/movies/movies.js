import Movie from "../../../../model/movieModel.js";
import { Op } from "sequelize";
export const createMovie = async (req, res) => {
  try {
    const { title, type, director, budget, location, duration, yearTime } =
      req.body;

    // Check if user exists
    // const user = await User.findByPk(userId);
    // if (!user) return res.status(404).json({ message: "User not found" });

    const movie = await Movie.create({
      title,
      type,
      director,
      budget,
      location,
      duration,
      yearTime,
      // userId,
    });

    res
      .status(201)
      .json({ message: "Movie created successfully", data: movie });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



export const getAllMovies = async (req, res) => {
  try {
    const {
      page = 1,
      pageSize = 4,
      column = "createdAt",
      direction = "DESC",
      search = null,
      type = null,
    } = req.query;

    const offset = (page - 1) * pageSize || 0;

    const where = {
      ...(search && {
        [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { director: { [Op.like]: `%${search}%` } },
          { location: { [Op.like]: `%${search}%` } },
          { type: { [Op.like]: `%${search}%` } },
        ],
      }),
      ...(type && { type }), 
    };

    const query = {
      where,
      order: [[column, direction]],
      offset: +offset,
      limit: +pageSize,
    };

    const result = await Movie.findAndCountAll(query);

    const totalPages = Math.ceil(result.count / pageSize);

    return res.status(200).json({
      data: result.rows,
      pagination: {
        total: result.count,
        page: +page,
        pageSize: +pageSize,
        totalPages,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);

    if (!movie) return res.status(404).json({ message: "Movie not found" });

    res.status(200).json({ data: movie });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Movie.update(req.body, { where: { id } });

    if (!updated) return res.status(404).json({ message: "Movie not found" });

    const updatedMovie = await Movie.findByPk(id);
    res.status(200).json({ message: "Movie updated", data: updatedMovie });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Movie.destroy({ where: { id } });

    if (!deleted) return res.status(404).json({ message: "Movie not found" });

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
