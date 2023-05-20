export function authToken(req, res, next) {
    const authHeader = req.authHeader['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log('TOKEN = ' + token);
    if (token == null)
        return res.status(401) // Token not sent

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err)
            return res.status(403) // invalid token

        req.decoded = decoded
        next();
    })
}