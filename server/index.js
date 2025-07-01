import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import pageRoutes from "./Routes/pageRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",  
  })
);

app.use("/api", pageRoutes);

const port = process.env.PORT || 5000;
const DBURL = process.env.DATABASE_URL;

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Database connection error: ${error}`);
  });
