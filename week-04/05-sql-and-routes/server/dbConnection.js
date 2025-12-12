//TODO: I want to set up a pool to send requests from the server to the database

//import pg -> PG is a postgres management package
import pg from "pg";

// Config .env file --> dotenv is a package to manage our .env file
import dotenv from "dotenv";
dotenv.config();

//set up a connection pool
export const dbPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
