import carroModel, { postCarrosModel } from "../models/carro.model.js"

export async function getAllCar(req, res) {
    let datos = await carroModel.getCarrosModel();

    res.status(200).json({
        "success": true,
        "message": "Llegamos a la función getAllCar",
        "data": datos
    })
}


export async function getCarUni(req, res) {
    //let carro = req.params[1];
    let { id_carro } = req.params;

    let data = await getCarUniModel(id_carro);
    res.status(200).json({
        success: true,
        data: data
    })
}

export const postCar = async (req, res) => {
    let { nombre, anyo, empresa } = req.body;

    let carro = await postCarrosModel(nombre, anyo, empresa);
    res.status(200).json({
        "success": true,
        "msg": "Llegamos a la funcion postCar",
        "data": data
    })
}

export const putCar = async (req, res) => {
    let { id_carro } = req.params;
    let { nombre, anyo, empresa } = req.body;

    let data = await carroModel.putCarroModel(id_carro, nombre, anyo, empresa);
    res.status(200).json({
        success: true,
        data: []
    })
}

export const delCar = async (req, res) => {
    let { id_carro } = req.params;
    let { nombre, anyo, empresa } = req.body;

    let data = await carroModel.deleteCarroModel(id_carro, nombre, anyo, empresa);
    res.status(200).json({
        success: true,
        data: []
    })
}

// exporto por defecto todas las funciones
export default {
    postCar,
    getAllCar,
    getCarUni,
    putCar,
    delCar
}
