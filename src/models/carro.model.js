import pgConnection from "../services/pgConnection.service.js"
export const getCarrosModel = async () => {
    const pg = new pgConnection();
    return await pg.connection.query("SELECT * FROM CARRO");
    console.log("llegué")
}

export const getCarUniModel = async () => {
    try {
        const pg = new pgConnection();
        return await pg.connection.query("SELECT * FROM CARRO where id_carro = $1 ", [id_carro]);
    } catch (error) {
        return [];
    }
}
export const postCarrosModel = async (nombre, anyo, empresa) => {
    const pg = new pgConnection();
    // Hago la consulta
    return await pgConnection.query("INSERT INTO CARRO (NOMBRE, ANYO, EMPRESA) VALUES ($1,$2,$3) returning * "
        , [nombre, anyo, empresa]
    );
}

export const putCarroModel = async (id_carro, nombre, anyo, empresa) => {
    const pg = new pgConnection();
    // Hago la consulta
    return await pgConnection.query("UPDATE CARRO SET NOMBRE = ${nom}, ANYO = ${an}, EMPRESA = ${em},WHERE id_carro = ${id} returning * "
        , {
            nom: nombre,
            an: anyo,
            em: empresa,
            id: id_carro
        }
    );
}

export const deleteCarroModel = async (id_carro) => {
    const pg = new pgConnection();
    // Hago la consulta
    return await pgConnection.query("DELETE FROM CARRO WHERE ID_CARRO = ${id} returning *"
        , {
            id: id_carro
        }
    );
}

export default {
    getCarrosModel,
    postCarrosModel,
    getCarUniModel,
    putCarroModel,
    deleteCarroModel
}