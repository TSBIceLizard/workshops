import express, { request } from "express";
// import dotenv from "dotenv";
// import pg from "pg";
// dotenv.config();

const app = express();

app.use(express.json());

// app.use(pg());

const PORT = 8080;

app.listen(PORT, function () {
  console.info(`Server is running in port ${PORT}`);
});

//TODO: set up a root route to READ a welcome message
// Route --> /

app.get("/", function (request, response) {
  response.json({ message: "Welcome to the root route. GET comfy!" });
});

//Database connection string

// app.get("/images", async (req, res) => {
//   const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppy`;
//   const response = await fetch(API);
//   const imageData = await response.json();

//   res.json(imageData.results);
// });

//==================================ROUTES

import { dbPool } from "./dbConnection.js";

//TODO: I want to READ the data in the staff table

app.get("/staff", async function (request, response) {
  const query = await dbPool.query(
    `SELECT name, address, age, bio FROM staff;`
  );
  console.log(query);
  response.json(query.rows);
});

// // TODO : I would like to read the name and address of all staff!
// // Route --> "staff-location"
// // HTTP method --> get
// app.get("/staff-location", async function (request, response) {
//   const query2 = await dbPool.query("SELECT name, address FROM staff;");
//   console.log(query2);
//   response.json(query2.rows);
// });
