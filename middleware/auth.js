const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send({ error: "Access denied. No token provided" });

    try {
        const decoded = jwt.verify(token, "jwtPrivateKey");
        req.user = decoded;

    } catch (error) {
        return res.status(401).send({ error: "Token expired" + req.user + "   " + token });
    }

    next();
}