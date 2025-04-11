import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
import userRoute from "./routes/user.route.js";
import restaurantRoute from "./routes/resturant.route.js";
import menuRoute from "./routes/menu.routes.js";
import orderRoute from "./routes/order.routes.js";

// default middleware for any mern project
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoute);
app.use("/api/v1/menu", menuRoute);
app.use("/api/v1/order", orderRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on port ${PORT}`);
});
