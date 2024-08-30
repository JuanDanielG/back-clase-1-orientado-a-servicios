import { Router } from "express";
import { verifyToken } from "./token.middleware.js";

const middleWare = Router();

middleWare.use("/api", verifyToken);

export default middleWare