// import express from my node_modules

import express, { request } from "express";

// Instantiate our express app

const app = express();

// Pretend that we have a data base (but actually we are just going to write some bird stuff in an array)

app.use(express.json());

const data = [
  {
    name: "Robin",
    type: "garden",
    size: "rather small",
    cuteThreshold: 500,
  },
  {
    name: "Crow",
    type: "corvid",
    size: "somewhat medium",
    cuteThreshold: 388,
  },
  {
    name: "Toucan",
    type: "jungle",
    size: "quite large",
    cuteThreshold: 396,
  },
  {
    name: "Hawk",
    type: "menacing",
    size: "quite biggish",
    cuteThreshold: 200,
  },
];

// Create a root endpoint https://localhost:8080/
app.get("/", function (request, response) {
  response.send("You are looking at my root route. How roude! Updated!");
});

// firstButton.addEventListener("click", function (event) {});

app.get("/birds", function (request, response) {
  response.json(data);
});

// /birds route (but this one is to add a bird)
// this doesn't actually work, because we don't actually have a database yet

app.post("/birds", function (request, response) {
  response.json("This is the POST /birds route!");
});

//start our server
app.listen(8080, function () {
  console.log("App running on port 8080");
});

app.post("/add", function (request, response) {
  console.log(request.body);
  const numA = request.body.a;
  const numB = request.body.b;
  console.log(numA);
  response.send(`${numA} + ${numB} = ${numA + numB}`);
});

// CRUD describes our HTTP options. Create - POST. Read - GET. Update - PUT. Delete.
// Also considered HTTP methods
