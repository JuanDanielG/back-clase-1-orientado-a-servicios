

export const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];

    res.status(200).json(
        {
            sucess: true,
            token: token
        }
    )
}