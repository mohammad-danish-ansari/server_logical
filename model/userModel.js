import { DataTypes } from "sequelize";
import sequelize from "../config/dbSQL.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
   phone: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    // unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: "Users",
  timestamps: true,
  underscored: true
});
User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// generate JWT
User.prototype.genToken = function () {
  return jwt.sign({ id: this.id, email: this.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  });
};
export default User;
