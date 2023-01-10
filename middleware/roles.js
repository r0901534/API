function admin(req, res, next) {
    console.log(req.user);
    if (!req.user.roles.includes("admin")) return res.status(403).send({ error: "Access denied!" });
    next();
}

function gebruiker(req, res, next) {
    if (!req.user.roles.includes("gebruiker")) return res.status(403).send({ error: "Access denied!" });
    next();
}

module.exports = { admin, gebruiker };