import jwt from "jsonwebtoken"
import { environment } from "../config/default.js";

export const login = async (req, res) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),   // expiracion, es el tiempo que va durar el token en vivo, yo mismo le puedo poner el tiempo
        data: {
            role: 'role_admin',
            doc: '109217479724',
            username: 'usuario'
        }
    }, environment.jwt_hash);
    res.status(200).json(
        {
            sucess: true,
            token: token
        }
    )
}