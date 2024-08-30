import express from "express";
import { environment } from './default.js';
import route from '../routes/index.route.js';
import pgConnection from "../services/pgConnection.service.js";
import middleWare from "../middlewares/index.middleware.js";

export default class Server {
    constructor() {
        //inicializo las variables de la clase
        this.app = express();
        this.app.get
        this.port = environment.port
    }
    async connectionDB() {
        new pgConnection();
    }
    middlewares() {
        //configuro para que acepte objeto tipo json
        this.app.use(express.json())
        // activo el uso de middleware personalizado
        this.app.use(middleWare)
    }
    route() {
        this.app.use(route)
    }
    runServer() {
        this.connectionDB()
        this.middlewares()
        this.route()
        this.app.listen(this.port, () => {
            console.log(`Hola servidor ${this.port}`)
        })
    }
}