import mongoose from "mongoose";

const connectDb = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    const connection = await mongoose.connect(MONGO_URL);
    console.log(
      "connected with database successfully",
      connection.connection.host
    );
  } catch (error) {
    console.log("error in connecting with database", error);
  }
};
export default connectDb;
