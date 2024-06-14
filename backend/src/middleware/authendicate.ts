import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { COMPANY_DETAILS } from "../constants";


const authenticateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response = await axios.post("http://20.244.56.144/test/auth", {
    companyName: COMPANY_DETAILS.companyName,
    clientID: COMPANY_DETAILS.clientID,
    clientSecret: COMPANY_DETAILS.clientSecret,
    ownerName: COMPANY_DETAILS.ownerName,
    ownerEmail: COMPANY_DETAILS.ownerEmail,
    rollNo: COMPANY_DETAILS.rollNo,
  });

  const accessToken = response.data.access_token;

  req.headers["Authorization"] = `Bearer ${accessToken}`;

  next();
};

export default authenticateRequest;