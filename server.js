import express from "express";
import "express-async-errors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
// Middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const app = express();

dotenv.config();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);

// app.use("/", (req, res) => {
//   res.status(200).json({ msg: "Hello.. dont worry I am runing" });
// });

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
