import { Router } from "express";
import routerCarros from "./carros.route.js";
import routerAuth from "./auth.route.js"

const route = Router()

route.use("/auth", routerAuth)
route.use("/api", routerCarros)

export default route;