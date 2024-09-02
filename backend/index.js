import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();


import { errorHandler, NotFound } from "./middleware/error-handler.js";

app.use(
  cors({
    origin: process.env.WEB_ORIGIN,
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


import NotificationRoutes from "./routes/notificationRoutes.js";
import Auth from "./routes/authRoute.js";
import userAuth from "./routes/userRoute.js";
import menuRoute from "./routes/menuRoutes.js";
import uploadRoute from "./routes/uploadRoute.js";
import orderRoute from "./routes/orderRoutes.js";
import StatRoute from "./routes/statRoute.js";
import reviewRoute from "./routes/reviewRoutes.js";

app.use("/api/v1/auth", Auth);
app.use("/api/v1/user", userAuth);
app.use("/api/v1/product", menuRoute);
app.use("/api/v1/upload", uploadRoute);
app.use("/api/v1/payment", orderRoute);
app.use("/api/v1/stat", StatRoute);
app.use("/api/v1/notification", NotificationRoutes);
app.use("/api/v1/review", reviewRoute);
// // Middlewares
app.use(NotFound);
app.use(errorHandler);

// addUserId(id, socket?.id)
app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
