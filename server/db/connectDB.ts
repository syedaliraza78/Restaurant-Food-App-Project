// dbconnection :ss3v96g8UamtE2ix
// username : thirdplaylist7806
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("DB Connected");
  } catch (error) {
    console.log({ message: error });
  }
};
