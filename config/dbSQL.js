import dotenv from "dotenv";
dotenv.config();
// console.log("SQL_DATABASE_URL:", process.env.SQL_DATABASE_URL);

import { Sequelize } from "sequelize";
import User from "../model/userModel.js";


const sequelize = new Sequelize(process.env.SQL_DATABASE_URL, {
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
});

(async () => {
  try {
      await sequelize.authenticate();
      console.log("MySQL database connected successfully!");
      await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Unable to connect to MySQL:", error);
  }
})();

export default sequelize;
