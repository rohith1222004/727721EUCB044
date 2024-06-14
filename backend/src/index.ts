import express, { Express, Request, Response } from "express";
import categoriesRouter from "./routes/categories";
import authenticateRequest from "./middleware/authendicate";
import cors from 'cors'
const app: Express = express();
const port = 8080;

app.use(express.json())
app.use(cors())
app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.use('/categories', authenticateRequest, categoriesRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}⚡`);
});