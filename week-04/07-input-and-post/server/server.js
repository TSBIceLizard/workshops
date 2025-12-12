//imports

import express from "express";

//We need to configure CORS to allow our client to send data (cross-origin)
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();

//Config
app.use(cors());

app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});

//TODO: READ a welcome message
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server. GET comfy!" });
  //   res.send("<h1>Welcome to the server. GET comfy!</h1>");
});

//TODO: CREATE data using the form values from the client to send it to the database
app.post("/new-staff", (req, res) => {
  //receive the data from the client
  const newStaff = req.body.formValues;
  console.log(newStaff);
  //Query the database to INSERT the data into the staff table
  //We use parameters in SQL to protect the data and reuse the query
  const query = db.query(
    `INSERT INTO staff (name, address, age, bio) VALUES ($1, $2, $3, $4)`,
    [newStaff.staffname, newStaff.address, newStaff.age, newStaff.bio]
  );
  //query the database to insert the data into the staff table
  res.json({ status: "success", values: newStaff });
});
