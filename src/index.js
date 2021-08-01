import "dotenv/config";
import express from "express";
import UserController from "./controllers/userController";

const app = express();
app.use(express.json());

app.post("/users", UserController.store);

export default app;
