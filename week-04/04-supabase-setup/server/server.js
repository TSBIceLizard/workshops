import express, { request } from "express";
import dotenv from "dotenv";
// import pg from "pg";
// import dbPool from "./dbConnection";

const app = express();

app.use(express.json());

dotenv.config();

// app.use(pg());

const PORT = 8080;

app.listen(PORT, function () {
  console.info(`Server is running in port ${PORT}`);
});

//TODO: set up a root route to READ a welcome message
// Route --> /

// app.get("/", function (request, response) {
//   response.json({ message: "Welcome to the root route. GET comfy!" });
// });

//Database connection string

app.get("/images", async (req, res) => {
  const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppy`;
  const response = await fetch(API);
  const imageData = await response.json();

  res.json(imageData.results);
});
