import express from "express";
const app = express();

// Tells the app to accept JSON
app.used(express.json());

app.get("/", function (request, response) {
  response.json("IT's WORKING!!");
});
app.listen(8080, function () {
  console.log("App running on port 8080");
});
