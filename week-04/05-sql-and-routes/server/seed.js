import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

import { dbPool } from "./dbConnection.js";

dbPool.query(
  `INSERT INTO staff (name, address, age, bio) VALUES ('Theodore McLebason','Tunbridge Wells','29','I am one of the best explainers who did ever explained anything explainingly with my stupendous explanations!')`
);
