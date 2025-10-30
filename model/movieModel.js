import { DataTypes } from "sequelize";
import sequelize from "../config/dbSQL.js";
import User from "../model/userModel.js"
const Movie = sequelize.define(
  "Movie",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "Movie",
    },
    director: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    budget: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    duration: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    yearTime: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", 
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "Movies",
    timestamps: true,
    underscored: true,
  }
);
User.hasMany(Movie, { foreignKey: "userId", onDelete: "CASCADE" });
Movie.belongsTo(User, { foreignKey: "userId" });
export default Movie;
