import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
