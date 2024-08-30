import pgPromise from "pg-promise";
import { environment } from "../config/default.js";

export default class pgConnection {

    connection;

    constructor() {
        if (pgConnection.instance) {
            return pgConnection.instance;
        }
        pgConnection.instance = this;

        const pgp = pgPromise({})
        /* driver : // nombre_de_usuario : contraseña @ direccion_de_BD : puerto / nombre:Db / */
        this.connection = pgp(environment.db_url);
        this.connection.connect()
            .then(obj => {
                console.log("me conecté " + obj.client.serverVersion);
                obj.done();
            })
            .catch(error => {
                console.log("Error de conexión: " + error.message || error);
            })
    }
}