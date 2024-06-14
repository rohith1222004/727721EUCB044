import { Router } from "express";
import { getProducts } from "../controllers/categories.controller";
import authenticateRequest from "../middleware/authendicate";

const categoriesRouter = Router();   
categoriesRouter.get(`/companies/:companies/categories/:categoryname/products`,authenticateRequest,getProducts); 
  
export default categoriesRouter