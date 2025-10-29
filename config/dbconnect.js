import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  try {
    console.log(DATABASE_URL);

    const DB_OPTION = {
      dbName: "atDrive",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTION);
    console.log(`MongoDB database connected successfully!`);
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;
