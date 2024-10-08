import { Router } from "express";
// import { getAllCar, postCar, putCar } from "../controllers/carro.controller.js";
import carroController from "../controllers/carro.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { getCarroValidator } from "../validators/carro.validators.js";

const routerCarros = Router()

routerCarros.get("/carros", carroController.getAllCar);
routerCarros.get("/carros/:id_carro",validate(getCarroValidator) ,carroController.getCarUni);
routerCarros.post("/carros", carroController.postCar);
routerCarros.delete("/carros/id_carro", carroController.delCar);
routerCarros.put("/carros/id_carro", carroController.putCar);

export default routerCarros;