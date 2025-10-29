import { DataTypes } from "sequelize";
import sequelize from "../config/dbSQL.js";

const Movie = sequelize.define("Movie", {
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
}, {
  tableName: "Movies",
  timestamps: true,
  underscored: true
});

export default Movie;
