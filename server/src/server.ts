import express from "express";
import projectRouter from "./router/projectRouter.js";

const app = express();

app.use(express.json());

//ROUTES
app.use('/api', projectRouter)
export default app;
